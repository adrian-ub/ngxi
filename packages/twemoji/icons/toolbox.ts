import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiToolboxIcon],svg[twemoji-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M26 .5H10C8.07.5 6.5 2.07 6.5 4v4h3V4c0-.271.229-.5.5-.5h16c.271 0 .5.229.5.5v4h3V4c0-1.93-1.57-3.5-3.5-3.5"></svg:path><svg:path fill="#DD2E44" d="M36 31.765S36 36 31.765 36H4.235C0 36 0 31.765 0 31.765V11.647c0-4.235 4.235-4.235 4.235-4.235h27.529s4.235 0 4.235 4.235z"></svg:path><svg:path fill="#CCD6DD" d="M4 22h28v2H4z"></svg:path><svg:path fill="#BE1931" d="M0 15h36v2H0zm4 9h28v2H4zm0 6h28v2H4z"></svg:path><svg:path fill="#CCD6DD" d="M4 28h28v2H4z"></svg:path><svg:path fill="#AAB8C2" d="M10 19H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m18 0h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1"></svg:path><svg:path fill="#292F33" d="M25 17v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1zM7 17v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1z"></svg:path><svg:path fill="#292F33" d="M26 15h2v3h-2zM8 15h2v3H8z"></svg:path>`,
})
export class TwemojiToolboxIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
