import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindBackward5Icon],svg[tabler-rewind-backward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 18a6 6 0 1 0 0-12H4"></svg:path><svg:path d="M7 9L4 6l3-3m1 17h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3"></svg:path></svg:g>`,
})
export class TablerRewindBackward5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
