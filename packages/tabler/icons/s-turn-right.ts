import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSTurnRightIcon],svg[tabler-s-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7H21"></svg:path><svg:path d="m18 16l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerSTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
