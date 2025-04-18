import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleDobuleRightIcon],svg[fontisto-angle-dobule-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 12L2.422 24L0 21.57L9.547 12L0 2.43L2.422 0zm10.4 0L12.822 24L10.4 21.57L19.947 12L10.4 2.43L12.822 0z"></svg:path>`,
})
export class FontistoAngleDobuleRightIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
