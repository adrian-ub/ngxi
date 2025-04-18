import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNoAccessSolidIcon],svg[clarity-no-access-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m11.15 18H6.85a.85.85 0 0 1-.85-.85v-2.3a.85.85 0 0 1 .85-.85h22.3a.85.85 0 0 1 .85.85v2.29a.85.85 0 0 1-.85.86" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNoAccessSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
