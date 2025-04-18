import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNeutralFaceSolidIcon],svg[clarity-neutral-face-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m7.05 21.06a1 1 0 0 1-1 1h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1M27 14.28a1.8 1.8 0 1 1-1.8-1.8a1.8 1.8 0 0 1 1.8 1.8m-15.8 1.8a1.8 1.8 0 1 1 1.8-1.8a1.8 1.8 0 0 1-1.84 1.8Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNeutralFaceSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
