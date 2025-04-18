import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPagekitIcon],svg[logos-pagekit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M0 0v320h128v-48H48V45.333h160V224h-80v48h128V0z"></svg:path>`,
})
export class LogosPagekitIcon {
  readonly viewBox = input("0 0 256 320")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
