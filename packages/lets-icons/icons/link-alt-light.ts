import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLinkAltLightIcon],svg[lets-icons-link-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m4.872 9.995l-1.54-1.369a.5.5 0 0 0-.664.748l1.449 1.288q.386-.343.755-.667m3.054 3.973q.493.393.943.701C9.94 15.402 10.91 15.81 12 15.81s2.059-.408 3.131-1.14c1.055-.722 2.26-1.793 3.817-3.177l.028-.025l2.356-2.094a.5.5 0 1 0-.664-.748l-2.357 2.095c-1.59 1.414-2.748 2.442-3.744 3.123c-.984.672-1.756.966-2.567.966s-1.583-.294-2.567-.966a15 15 0 0 1-.742-.546q-.356.31-.765.67"></svg:path><svg:path d="M16.074 10.031a17 17 0 0 0-.943-.7C14.06 8.598 13.09 8.189 12 8.189s-2.059.409-3.131 1.142c-1.055.72-2.26 1.792-3.818 3.176l-.027.024l-2.356 2.095a.5.5 0 0 0 .664.747L5.69 13.28c1.59-1.414 2.749-2.442 3.744-3.123c.984-.672 1.756-.967 2.567-.967s1.583.295 2.567.967q.355.242.742.545q.356-.309.765-.67m3.809 3.307l-.755.667l1.54 1.368a.5.5 0 0 0 .664-.747z"></svg:path></svg:g>`,
})
export class LetsIconsLinkAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
