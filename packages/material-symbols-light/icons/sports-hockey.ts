import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsHockeyIcon],svg[material-symbols-light-sports-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.77 19.116v-1.462q0-.329.22-.55q.22-.22.548-.22h.847v2.232zm2.615 0v-2.231h4.192l1.004-2.258l.677 1.462l-1.12 2.477q-.144.294-.346.422t-.553.128zm14.23 0v-2.231h.847q.329 0 .549.22t.22.549v1.462zm-1 0h-3.853q-.333 0-.545-.128t-.355-.422L7.735 4.885h1.35L12 11.43l2.916-6.546h1.35l-3.589 8.042l1.746 3.958h4.193z"></svg:path>`,
})
export class MaterialSymbolsLightSportsHockeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
