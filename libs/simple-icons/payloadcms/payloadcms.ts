import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPayloadcms],svg[si-payloadcms]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Payload CMS</svg:title>
    <svg:path
      d="M11.068 0 22.08 6.625v12.573L13.787 24V11.427L2.769 4.808 11.068 0ZM1.92 18.302l8.31-4.812v9.812l-8.31-5Z"
    />`,
})
export class SiPayloadcms {}
