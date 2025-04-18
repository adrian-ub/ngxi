import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculationIcon],svg[tdesign-calculation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2v3.5H11v2H7.5V11h-2V7.5H2v-2h3.5V2zM13 5.5h9v2h-9zm-2.224 9.511L7.948 17.84l2.989 2.988l-1.415 1.415l-2.989-2.99l-2.828 2.83l-1.414-1.415l2.828-2.828l-2.668-2.668l1.415-1.415l2.667 2.668l2.829-2.828zm5.724-1.013h2.004v2.004H16.5zM13 17h9v2h-9zm3.5 2.998h2.004v2.004H16.5z"></svg:path>`,
})
export class TdesignCalculationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
