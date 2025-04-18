import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHouzzIcon],svg[fontisto-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.926 15.991L13.853 12v7.995L6.926 24zM0 12v7.995l6.926-4.005zM6.926 0v7.995L0 12V4.005zm0 7.995l6.926-3.991V12z"></svg:path>`,
})
export class FontistoHouzzIcon {
  readonly viewBox = input("0 0 14 24")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
