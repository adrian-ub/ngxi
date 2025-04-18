import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSTurnLeftIcon],svg[tabler-s-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3"></svg:path><svg:path d="m6 16l-3 3l3 3"></svg:path></svg:g>`,
})
export class TablerSTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
