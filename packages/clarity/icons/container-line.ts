import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityContainerLineIcon],svg[clarity-container-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 8v20h28V8Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M9 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M14.92 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M21 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M27 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityContainerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
