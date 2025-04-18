import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityDollarBillSolidIcon],svg[clarity-dollar-bill-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26v-4.85A5.18 5.18 0 0 1 8.79 26Zm0-11.15V10h4.79A5.18 5.18 0 0 1 4 14.85m14 10.3c-3.47 0-6.3-3.21-6.3-7.15s2.83-7.15 6.3-7.15s6.3 3.21 6.3 7.15s-2.83 7.15-6.3 7.15M32 26h-4.75A5.18 5.18 0 0 1 32 21.15Zm0-11.15A5.18 5.18 0 0 1 27.25 10H32Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:ellipse cx="18" cy="18" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="4" ry="4.72"></svg:ellipse><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityDollarBillSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
