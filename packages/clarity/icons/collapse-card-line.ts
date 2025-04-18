import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCollapseCardLineIcon],svg[clarity-collapse-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 21H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H4v-4h28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m18 20.22l5.65-5.65a.81.81 0 0 0 0-1.14a.8.8 0 0 0-1.13 0L18 18l-4.52-4.52a.8.8 0 0 0-1.13 0a.81.81 0 0 0 0 1.14Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="m18 14.22l5.65-5.65a.81.81 0 0 0 0-1.14a.8.8 0 0 0-1.13 0L18 12l-4.52-4.57a.8.8 0 0 0-1.13 0a.81.81 0 0 0 0 1.14Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCollapseCardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
