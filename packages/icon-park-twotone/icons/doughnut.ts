import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDoughnutIcon],svg[icon-park-twotone-doughnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDoughnut0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="19"></svg:circle><svg:circle cx="24" cy="24" r="7" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 28s3.389-2.958 6-1c4 3 6 1 6 1m11 1c.667-1 4-4.286 7-3c4 1.714 7 0 7-1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDoughnut0)"></svg:path>`,
})
export class IconParkTwotoneDoughnutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
