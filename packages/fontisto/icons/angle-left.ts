import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleLeftIcon],svg[fontisto-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"></svg:path>`,
})
export class FontistoAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
