import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFlashIcon],svg[fontisto-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 13.714h7.875L5.137 24l12.006-13.714H9.268L12 0z"></svg:path>`,
})
export class FontistoFlashIcon {
  readonly viewBox = input("0 0 17 24")
  readonly width = input("0.71em")
  readonly height = input("1em")
}
