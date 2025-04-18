import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCityGateIcon],svg[icon-park-outline-city-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M15 11h17s5.048 2.966 7 4c1.091.578 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.909-.422 5-1c1.952-1.034 6-4 6-4Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 11l7-7l6 7z"></svg:path><svg:path d="M35 18v6m-23-6v6"></svg:path><svg:path stroke-linejoin="round" d="m4 44l2-20h36l2 20z"></svg:path><svg:path d="M20 38a4 4 0 0 1 8 0v6h-8z"></svg:path></svg:g>`,
})
export class IconParkOutlineCityGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
