import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAltIcon],svg[tabler-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5v8h4m1-8h4m-2 0v8"></svg:path>`,
})
export class TablerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
