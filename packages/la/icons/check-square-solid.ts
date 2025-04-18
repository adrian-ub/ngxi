import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCheckSquareSolidIcon],svg[la-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24V12.187l-2 2V26H6V6h19.813l2-2zm23.281 3.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></svg:path>`,
})
export class LaCheckSquareSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
