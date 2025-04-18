import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCalculatorSolidIcon],svg[clarity-calculator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M12 28h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm7 12h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm7 12h-2v-2h2Zm0-6h-2v-2h2Zm0-6h-2v-2h2Zm0-7H10V5h16Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCalculatorSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
