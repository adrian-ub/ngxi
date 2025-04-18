import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineElectricDrillIcon],svg[icon-park-outline-electric-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 9h19.698a4 4 0 0 1 3.99 4.29l-.584 8a4 4 0 0 1-3.99 3.71H20z"></svg:path><svg:path d="M30.09 25H39l-4.089 11.244A4.19 4.19 0 0 1 30.977 39c-2.905 0-4.927-2.887-3.934-5.617zM14 12h6v10h-6z"></svg:path><svg:path stroke-linecap="round" d="M14 17H4"></svg:path></svg:g>`,
})
export class IconParkOutlineElectricDrillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
