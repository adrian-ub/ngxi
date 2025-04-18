import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySaveIcon],svg[subway-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C128 149.3 0 42.7 0 42.7V128c0 170.7 149.3 384 256 384s256-213.3 256-384V42.7S384 149.3 256 0"></svg:path>`,
})
export class SubwaySaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
