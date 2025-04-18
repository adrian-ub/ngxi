import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFerrisWheelIcon],svg[icon-park-twotone-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFerrisWheel0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m9 44l15-22m15 22L24 22"></svg:path><svg:path stroke="#fff" stroke-width="4" d="M9.132 24A15 15 0 0 1 9 22a14.95 14.95 0 0 1 1.5-6.546m.656 14.299A15.02 15.02 0 0 0 21 36.7m6 0a15.02 15.02 0 0 0 9.911-7.06M38.868 24q.131-.982.132-2a14.94 14.94 0 0 0-1.5-6.546M27 7.3a14.96 14.96 0 0 1 7 3.52M21 7.3a14.96 14.96 0 0 0-7.614 4.101"></svg:path><svg:circle cx="10" cy="27" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="24" cy="37" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="24" cy="7" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="12" cy="13" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="36" cy="13" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="38" cy="27" r="3" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="24" cy="22" r="4" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 44h8m20 0h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFerrisWheel0)"></svg:path>`,
})
export class IconParkTwotoneFerrisWheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
