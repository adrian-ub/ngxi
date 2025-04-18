import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSpiderIcon],svg[tabler-spider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 4v2l5 5M2.5 9.5L4 11h6m-6 8v-2l6-6m9-7v2l-5 5m7.5-1.5L20 11h-6m6 8v-2l-6-6"></svg:path><svg:path d="M8 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerSpiderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
