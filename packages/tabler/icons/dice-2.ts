import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDice2Icon],svg[tabler-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
