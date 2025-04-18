import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMedal2Icon],svg[tabler-medal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3h6l3 7l-6 2l-6-2zm3 9L9 3m6 8l-3-8m0 16.5L9 21l.5-3.5l-2-2l3-.5l1.5-3l1.5 3l3 .5l-2 2L15 21z"></svg:path>`,
})
export class TablerMedal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
