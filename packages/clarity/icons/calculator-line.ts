import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCalculatorLineIcon],svg[clarity-calculator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 32V4h20v28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M12 8h13.67V6H11a1 1 0 0 0-1 1v4.67h2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M12 16h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M24 16h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M18 16h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M12 22h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M24 22h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M18 22h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M12 28h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="currentColor" d="M24 28h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-10"></svg:path><svg:path fill="currentColor" d="M18 28h-2v2h4v-4h-2z" class="clr-i-outline clr-i-outline-path-11"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCalculatorLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
