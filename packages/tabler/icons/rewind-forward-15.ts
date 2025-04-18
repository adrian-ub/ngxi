import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindForward15Icon],svg[tabler-rewind-forward-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 9l3-3l-3-3"></svg:path><svg:path d="M9 18A6 6 0 1 1 9 6h11m-4 14h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3m-6 0v6"></svg:path></svg:g>`,
})
export class TablerRewindForward15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
