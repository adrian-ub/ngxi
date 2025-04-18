import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindBackward15Icon],svg[tabler-rewind-backward-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3m4 4a6 6 0 1 0 0-12H4m1 8v6"></svg:path><svg:path d="M7 9L4 6l3-3"></svg:path></svg:g>`,
})
export class TablerRewindBackward15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
