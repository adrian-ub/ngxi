import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerABIcon],svg[tabler-a-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3m9-6v12m4-2V8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3"></svg:path>`,
})
export class TablerABIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
