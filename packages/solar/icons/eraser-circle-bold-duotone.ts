import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBoldDuotoneIcon],svg[solar-eraser-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.606 7.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618l-4.723-4.723zm-3.679 3.68l4.724 4.723l-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z"></svg:path>`,
})
export class SolarEraserCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
