import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAsteriskIcon],svg[la-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.7 17l6.198 8.398L21.5 27L16 18.3L10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2l.8 2.7z"></svg:path>`,
})
export class LaAsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
