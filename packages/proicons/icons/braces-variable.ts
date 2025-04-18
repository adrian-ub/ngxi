import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBracesVariableIcon],svg[proicons-braces-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20.25a2 2 0 0 1-2-2v-2.343a4 4 0 0 0-1.172-2.829L2.75 12l1.078-1.078A4 4 0 0 0 5 8.093V5.75a2 2 0 0 1 2-2m10 16.5a2 2 0 0 0 2-2v-2.343a4 4 0 0 1 1.172-2.829L21.25 12l-1.078-1.078A4 4 0 0 1 19 8.093V5.75a2 2 0 0 0-2-2M9 8.143l6 7.714m0-7.714l-6 7.714"></svg:path>`,
})
export class ProiconsBracesVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
