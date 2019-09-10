import djanjucks from '../../src';

describe('spaceless tag', () => {
  it('strips whitespaces between html tags', () => {
    const result = djanjucks.renderString(`{% spaceless %}
<ul>
  <li>Test</li>
</ul>
{% endspaceless %}`);

    expect(result).toEqual('<ul><li>Test</li></ul>');
  });
  
  it('allows block tags inside', () => {
    const result = djanjucks.renderString(`{% spaceless %}
{% block example %}
  <span>Default block content</span>
{% endblock %}
{% endspaceless %}`);
    
    expect(result).toEqual('<span>Default block content</span>');
  });
});
