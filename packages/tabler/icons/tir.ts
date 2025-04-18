import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTirIcon],svg[tabler-tir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 18h8m4 0h2v-6a5 7 0 0 0-5-7h-1l1.5 7H21m-9 6V5h3M3 17v-5h9"></svg:path></svg:g>`,
})
export class TablerTirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
