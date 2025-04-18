import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFireHydrantIcon],svg[tabler-fire-hydrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21h14m-2 0v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5"></svg:path><svg:path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8h12"></svg:path></svg:g>`,
})
export class TablerFireHydrantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
