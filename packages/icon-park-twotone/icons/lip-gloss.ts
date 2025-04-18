import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLipGlossIcon],svg[icon-park-twotone-lip-gloss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLipGloss0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M24 12H8s0 4 1 14s3 18 3 18h8s2-8 3-18s1-14 1-14m18 22H28s0 2 1 5s2.5 5 2.5 5h7s1.5-2 2.5-5s1-5 1-5"></svg:path><svg:path d="M35 34V13"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M31 7h8l-2 6h-4zM11 6h10v6H11z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLipGloss0)"></svg:path>`,
})
export class IconParkTwotoneLipGlossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
