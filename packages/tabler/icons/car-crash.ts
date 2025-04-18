import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarCrashIcon],svg[tabler-car-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="m7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H3m0-6h8m-6 0V6m2 0H3m11 2V6m5 6h2m-3.5 3.5L19 17m-1.5-8.5L19 7"></svg:path></svg:g>`,
})
export class TablerCarCrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
