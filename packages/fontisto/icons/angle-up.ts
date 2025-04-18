import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleUpIcon],svg[fontisto-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.57 19.2L24 16.778L12 4.8L0 16.778L2.43 19.2L12 9.653z"></svg:path>`,
})
export class FontistoAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
