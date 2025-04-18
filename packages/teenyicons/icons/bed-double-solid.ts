import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBedDoubleSolidIcon],svg[teenyicons-bed-double-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h15v6h-1V1H1v5H0z"></svg:path><svg:path fill="currentColor" d="M6 6H2V5h4zm-6 9h1v-4h13v4h1V7H0zm9-9h4V5H9z"></svg:path>`,
})
export class TeenyiconsBedDoubleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
