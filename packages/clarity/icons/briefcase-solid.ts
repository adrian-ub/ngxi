import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBriefcaseSolidIcon],svg[clarity-briefcase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18a4.06 4.06 0 0 0 4-4V6H24V4.43A2.44 2.44 0 0 0 21.55 2h-7.1A2.44 2.44 0 0 0 12 4.43V6H2v8a4.06 4.06 0 0 0 4.05 4h4v-2.08h2v5.7a1 1 0 1 1-2 0v-1.56H6.06A6.06 6.06 0 0 1 2 18.49v9.45a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9.45a6 6 0 0 1-4.06 1.57H28V18ZM14 4.43a.45.45 0 0 1 .45-.43h7.1a.45.45 0 0 1 .45.43V6h-8Zm12 17.19a1 1 0 1 1-2 0v-1.56H14V18h10v-2.08h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBriefcaseSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
