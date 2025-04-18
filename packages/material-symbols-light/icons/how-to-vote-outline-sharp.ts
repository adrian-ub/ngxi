import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHowToVoteOutlineSharpIcon],svg[material-symbols-light-how-to-vote-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.77 21.23v-4.818l3.21-3.625l.714.713l-2.884 3.27h14.38l-2.834-3.22l.713-.713l3.162 3.575v4.819zm1-1h14.46v-2.46H4.77zm7.26-5.18L6.778 9.758l6.679-6.68l5.273 5.274zm0-1.421l5.278-5.277L13.456 4.5L8.179 9.777zM4.77 20.23v-2.462z"></svg:path>`,
})
export class MaterialSymbolsLightHowToVoteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
