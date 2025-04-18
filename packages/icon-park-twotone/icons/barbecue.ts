import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBarbecueIcon],svg[icon-park-twotone-barbecue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBarbecue0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="8" x="12" y="4" fill="#555" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="12" y="22" fill="#555" stroke-linejoin="round" rx="4"></svg:rect><svg:path d="M16 31v13"></svg:path><svg:rect width="8" height="8" x="28" y="4" fill="#555" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="28" y="22" fill="#555" stroke-linejoin="round" rx="4"></svg:rect><svg:path d="M32 31v13"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 17h6m10 0h6M13 36h6m10 0h6"></svg:path><svg:path d="M16 14v6m16-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBarbecue0)"></svg:path>`,
})
export class IconParkTwotoneBarbecueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
