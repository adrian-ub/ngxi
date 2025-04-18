import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoDrinkIcon],svg[entypo-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.538 2.639C17.932 2.094 18 1 18 1H2s.068 1.094.462 1.639L9 11v6H7c-2 0-2 2-2 2h10s0-2-2-2h-2v-6zM9.4 6a1.599 1.599 0 1 1 3.2 0a1.6 1.6 0 0 1-3.2 0"></svg:path>`,
})
export class EntypoDrinkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
