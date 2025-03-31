import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siElevenlabs],svg[si-elevenlabs]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>ElevenLabs</svg:title>
    <svg:path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z"></svg:path>`,
})
export class SiElevenlabs {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
