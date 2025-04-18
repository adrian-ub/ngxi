import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSelfieIcon],svg[icon-park-twotone-selfie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSelfie0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29.234 6.98c3.714-1.568 11.276-2.47 13.794 5.891s-8.307 14.612-8.026 8.099c.28-6.514 7.995-1.152 7.83 3.562s-5.062 5.232-5.062 5.232"></svg:path><svg:rect width="26" height="12" x="4.241" y="15.778" fill="#555" rx="2" transform="rotate(-30 4.241 15.778)"></svg:rect><svg:path stroke-linecap="round" d="M21.5 19.67L29 32.66"></svg:path><svg:rect width="6" height="10" x="26.401" y="34.16" fill="#555" rx="3" transform="rotate(-30 26.401 34.16)"></svg:rect><svg:path stroke-linecap="round" d="m11.401 8.18l5.197-3m5.303 21.186l5.197-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSelfie0)"></svg:path>`,
})
export class IconParkTwotoneSelfieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
