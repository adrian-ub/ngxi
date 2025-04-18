import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatTextIcon],svg[topcoat-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 4.5h37v9h-2.85l-2.15-7h-10v27l6 1.8v2.2h-19v-2.2l6-1.8v-27H7.55l-2.2 7H2.5z"></svg:path>`,
})
export class TopcoatTextIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
