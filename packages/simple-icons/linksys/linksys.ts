import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLinksys],svg[si-linksys]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Linksys</svg:title>
    <svg:path
      d="M19.871 0c-1.7024 0-3.082 1.38-3.082 3.082 0 1.7025 1.38 3.08 3.082 3.082 1.7026 0 3.082-1.3795 3.082-3.082 0-1.7024-1.3795-3.082-3.082-3.082ZM1.047.488V24h21.3105v-3.469H5.166V.488Zm7.156 0v17.156h14.154v-3.4707h-10.039V.488Z"
    />`,
})
export class SiLinksys {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
