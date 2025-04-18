import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCloudbuildIcon],svg[material-symbols-cloudbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.375 15.025L8 14.25v-4.5l4-2.25l1.35.675ZM12 16.5l-1.3-.75l4-6.9l1.3.65v4.75Zm5.25-8.05L12 5.575L6.775 8.45L2.75 6.075L12 1l9.25 5.075ZM11 23l-9-5V7.375l4 2.35v5.925l5 2.75Zm2 0v-4.575l5-2.775v-5.9l4-2.375V18Z"></svg:path>`,
})
export class MaterialSymbolsCloudbuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
