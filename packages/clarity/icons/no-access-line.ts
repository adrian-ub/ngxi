import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNoAccessLineIcon],svg[clarity-no-access-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M27.15 15H8.85A1.85 1.85 0 0 0 7 16.85v2.29A1.85 1.85 0 0 0 8.85 21h18.3A1.85 1.85 0 0 0 29 19.15v-2.3A1.85 1.85 0 0 0 27.15 15m.25 4.15a.25.25 0 0 1-.25.25H8.85a.25.25 0 0 1-.25-.25v-2.3a.25.25 0 0 1 .25-.25h18.3a.25.25 0 0 1 .25.25Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNoAccessLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
