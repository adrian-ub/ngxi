import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPillLineDuotoneIcon],svg[solar-pill-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
