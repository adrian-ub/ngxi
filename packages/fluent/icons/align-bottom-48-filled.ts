import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignBottom48FilledIcon],svg[fluent-align-bottom-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 41.5a1.25 1.25 0 1 1 0-2.5h37.5a1.25 1.25 0 1 1 0 2.5zM26 32.25a4.25 4.25 0 0 0 4.25 4.25h5.5A4.25 4.25 0 0 0 40 32.25v-15A4.25 4.25 0 0 0 35.75 13h-5.5A4.25 4.25 0 0 0 26 17.25zM12.25 36.5h5.5A4.25 4.25 0 0 0 22 32.25V10a4.25 4.25 0 0 0-4.25-4.25h-5.5A4.25 4.25 0 0 0 8 10v22.25a4.25 4.25 0 0 0 4.25 4.25"></svg:path>`,
})
export class FluentAlignBottom48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
