import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMemoryLineIcon],svg[clarity-memory-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h4v8H8z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M16 12h4v8h-4z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M24 12h4v8h-4z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M15 27H4V17H2v10a2 2 0 0 0 2 2h12.61v-3.45h2.26V24H15Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M32 7H4a2 2 0 0 0-2 2v4h2V9h28v4h2V9a2 2 0 0 0-2-2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M32 27H19v2h13a2 2 0 0 0 2-2V17h-2Z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityMemoryLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
