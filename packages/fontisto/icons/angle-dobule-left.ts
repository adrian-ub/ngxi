import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleDobuleLeftIcon],svg[fontisto-angle-dobule-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.4 12L22.378 0L24.8 2.43L15.253 12l9.547 9.57L22.378 24zM0 12L11.978 0L14.4 2.43L4.853 12l9.547 9.57L11.978 24z"></svg:path>`,
})
export class FontistoAngleDobuleLeftIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
