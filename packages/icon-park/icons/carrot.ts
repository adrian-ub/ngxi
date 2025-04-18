import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCarrotIcon],svg[icon-park-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M15.6244 20.6823C14.2892 15.2475 18.4035 10 24 10V10C29.5965 10 33.7108 15.2475 32.3756 20.6824L27.2786 41.4294C26.9078 42.9388 25.5543 44 24 44V44C22.4457 44 21.0922 42.9388 20.7214 41.4294L15.6244 20.6823Z"></svg:path><svg:path stroke-linecap="round" d="M24 4L24 9.5"></svg:path><svg:path stroke-linecap="round" d="M30.1016 5.5918L27.3744 8.84185"></svg:path><svg:path stroke-linecap="round" d="M18 5.5918L20.7271 8.84185"></svg:path><svg:path stroke-linecap="round" d="M16 19H22"></svg:path><svg:path stroke-linecap="round" d="M25 26H31"></svg:path><svg:path stroke-linecap="round" d="M19 34H23"></svg:path></svg:g>`,
})
export class IconParkCarrotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
