import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindBackward40Icon],svg[tabler-rewind-backward-40-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.007 16.466A6 6 0 0 0 15 6H4m8 9.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 14v2a1 1 0 0 0 1 1h1m1-3v6"></svg:path><svg:path d="M7 9L4 6l3-3"></svg:path></svg:g>`,
})
export class TablerRewindBackward40Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
