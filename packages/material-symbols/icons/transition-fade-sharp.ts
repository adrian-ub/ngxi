import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitionFadeSharpIcon],svg[material-symbols-transition-fade-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h7v18zm8-16V3h2v2zm2 2V5h2v2zm2-2V3h2v2zm4 0V3h2v2zm-2 2V5h2v2zm-6 2V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm-6 2V9h2v2zm4 0V9h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsTransitionFadeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
