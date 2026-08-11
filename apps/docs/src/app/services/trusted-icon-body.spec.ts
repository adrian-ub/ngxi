import { trustIconBody } from './trusted-icon-body';

describe('trustIconBody', () => {
  it('accepts a plain SVG body of paths and groups', () => {
    const body =
      '<path stroke="currentColor" d="M1 2"/><circle cx="1" cy="2" r="3"/>';
    expect(trustIconBody(body)).toBe(body);
  });

  it('rejects script elements', () => {
    expect(trustIconBody('<script>alert(1)</script>')).toBeNull();
    expect(trustIconBody('<path d="M1 2"/><script>evil()</script>')).toBeNull();
  });

  it('rejects foreignObject elements', () => {
    expect(
      trustIconBody('<foreignObject><div>x</div></foreignObject>'),
    ).toBeNull();
  });

  it('rejects inline event handlers regardless of case', () => {
    expect(trustIconBody('<path onclick="evil()" d="M1 2"/>')).toBeNull();
    expect(trustIconBody('<path onLoad="evil()" d="M1 2"/>')).toBeNull();
  });

  it('rejects external href attributes', () => {
    expect(trustIconBody('<use href="https://evil.example" />')).toBeNull();
    expect(trustIconBody('<path href="data:text/html,x" d="M1 2"/>')).toBeNull();
    expect(trustIconBody('<use xlink:href="https://evil.example" />')).toBeNull();
    expect(trustIconBody('<use HREF="/abs/path" />')).toBeNull();
  });

  it('allows internal fragment hrefs used by use/defs bodies', () => {
    expect(trustIconBody('<use href="#SVG3qA7XbCf"/>')).not.toBeNull();
    expect(trustIconBody('<path xlink:href="#p" d="M1 2"/>')).not.toBeNull();
  });

  it('rejects style url() references', () => {
    expect(
      trustIconBody('<path style="fill:url(#grad)" d="M1 2"/>'),
    ).toBeNull();
  });

  it('allows style attributes without url()', () => {
    expect(trustIconBody('<path style="fill:red" d="M1 2"/>')).not.toBeNull();
  });

  it('rejects an embedded svg root so bodies stay single-layer', () => {
    expect(trustIconBody('<svg><path d="M1 2"/></svg>')).toBeNull();
    expect(trustIconBody('<path d="M1 2"/></svg>')).toBeNull();
  });

  it('rejects non-markup input', () => {
    expect(trustIconBody('plain text')).toBeNull();
    expect(trustIconBody('')).toBeNull();
  });
});
