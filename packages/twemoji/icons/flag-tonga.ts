import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagTongaIcon],svg[twemoji-flag-tonga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C10000" d="M32 5H15v13H0v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEEDED" d="M15 5H4a4 4 0 0 0-4 4v9h15zm-3 8H9v3H6v-3H3v-3h3V7h3v3h3z"></svg:path><svg:path fill="#C10000" d="M9 7H6v3H3v3h3v3h3v-3h3v-3H9z"></svg:path>`,
})
export class TwemojiFlagTongaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
