import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMindfulnessSharpIcon],svg[material-symbols-light-mindfulness-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.986q0-3.327 2.333-5.657T12 3q2.702 0 4.884 1.645t2.83 4.25L20.992 14H18v5h-4v2zm4.5-7.5h1v-6h-1zm3-1.5h1V8.5h-1zm-6-.5h1v-3h-1z"></svg:path>`,
})
export class MaterialSymbolsLightMindfulnessSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
