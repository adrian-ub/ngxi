import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCircleSolidIcon],svg[la-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.379 4 4 9.379 4 16s5.379 12 12 12s12-5.379 12-12S22.621 4 16 4m0 1c6.082 0 11 4.918 11 11s-4.918 11-11 11S5 22.082 5 16S9.918 5 16 5"></svg:path>`,
})
export class LaCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
