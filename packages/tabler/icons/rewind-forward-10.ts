import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindForward10Icon],svg[tabler-rewind-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 9l3-3l-3-3"></svg:path><svg:path d="M8 17.918A6 6 0 0 1 3 12a6 6 0 0 1 6-6h11m-8 8v6m3-4.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0"></svg:path></svg:g>`,
})
export class TablerRewindForward10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
