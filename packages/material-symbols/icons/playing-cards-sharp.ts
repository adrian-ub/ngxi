import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayingCardsSharpIcon],svg[material-symbols-playing-cards-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.2 14.8l1.15-4.15L12.8 8.2l-1.15 4.15zM4 18.825l-2.65-1.25L4 11.85zM6 21v-8l2.9 8zm5.25.575L5.425 5.55L16.75 1.425l5.825 16.025z"></svg:path>`,
})
export class MaterialSymbolsPlayingCardsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
