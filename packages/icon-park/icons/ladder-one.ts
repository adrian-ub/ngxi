import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLadderOneIcon],svg[icon-park-ladder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 17L35 17"></svg:path><svg:path d="M15 26L33 26"></svg:path><svg:path d="M12 35L30 35"></svg:path><svg:path d="M28.5652 43L38.3054 7.52959C38.655 6.25653 37.697 5 36.3768 5H22.2145C21.3374 5 20.5626 5.57158 20.3036 6.40968L9 43"></svg:path><svg:path d="M17 18L21 42"></svg:path><svg:path d="M35 18L39 42"></svg:path></svg:g>`,
})
export class IconParkLadderOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
