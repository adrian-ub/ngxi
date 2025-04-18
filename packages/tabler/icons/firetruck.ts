import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFiretruckIcon],svg[tabler-firetruck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21m-9 6V7h3M3 17v-5h9M3 9l18-6M6 12V8"></svg:path></svg:g>`,
})
export class TablerFiretruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
