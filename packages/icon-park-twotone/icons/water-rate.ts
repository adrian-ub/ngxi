import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWaterRateIcon],svg[icon-park-twotone-water-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWaterRate0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M24 44c8.837 0 16-6.512 16-14.545Q40 17.635 24 4Q8 17.636 8 29.455C8 37.488 15.163 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M18.857 19L24 24.368L29.143 19M18 26.158h12m-12 5.368h12m-6-5.368V36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWaterRate0)"></svg:path>`,
})
export class IconParkTwotoneWaterRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
