import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSlashIcon],svg[la-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.281 4.281l-22 22L5.72 27.72l22-22z"></svg:path>`,
})
export class LaSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
