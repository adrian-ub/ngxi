import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOldIcon],svg[tabler-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 21l-1-4l-2-3V8"></svg:path><svg:path d="m5 14l-1-3l4-3l3 2l3 .5M7 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 13l-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5"></svg:path></svg:g>`,
})
export class TablerOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
