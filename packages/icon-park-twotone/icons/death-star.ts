import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDeathStarIcon],svg[icon-park-twotone-death-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDeathStar0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#555"></svg:circle><svg:path stroke-linecap="round" d="M5 25h39"></svg:path><svg:circle cx="19" cy="15" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" d="M31 31h12m-9-14h8M25 37h14"></svg:path><svg:path d="M40 11.998A19.9 19.9 0 0 1 44 24c0 7.808-4.475 14.572-11 17.865M4.4 20c-.262 1.292-.4 2.63-.4 4c0 1.727.219 3.402.63 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDeathStar0)"></svg:path>`,
})
export class IconParkTwotoneDeathStarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
