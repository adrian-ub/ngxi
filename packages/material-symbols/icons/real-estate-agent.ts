import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRealEstateAgentIcon],svg[material-symbols-real-estate-agent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.025V11h1.6q.175 0 .35.038t.35.087l6.925 2.575q.35.125.563.45t.212.675q0 .525-.363.85T15.8 16h-2.625q-.125 0-.187-.012t-.163-.063l-1.6-.625l-.325.975l1.925.675q.05.025.15.038t.175.012H20q.8 0 1.4.575T22 19l-7.975 3zM1 22V11h4v11zM14.5 8h1V7h-1zm-2 0h1V7h-1zm2 2h1V9h-1zm-2 0h1V9h-1zm6.025 4q-.35-.825-1-1.45t-1.6-.975L9 9H7V6.5l7-5l7 5V14z"></svg:path>`,
})
export class MaterialSymbolsRealEstateAgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
