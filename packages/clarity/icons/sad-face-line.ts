import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySadFaceLineIcon],svg[clarity-sad-face-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:circle cx="25.16" cy="14.28" r="1.8" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></svg:circle><svg:circle cx="11.41" cy="14.28" r="1.8" fill="currentColor" class="clr-i-outline clr-i-outline-path-3"></svg:circle><svg:path fill="currentColor" d="M18.16 20a9 9 0 0 0-7.33 3.78a1 1 0 1 0 1.63 1.16a7 7 0 0 1 11.31-.13a1 1 0 0 0 1.6-1.2A9 9 0 0 0 18.16 20" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySadFaceLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
