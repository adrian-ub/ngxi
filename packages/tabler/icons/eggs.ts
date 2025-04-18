import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEggsIcon],svg[tabler-eggs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 22c-3 0-4.868-2.118-5-5c0-3 2-5 5-5c4 0 8.01 2.5 8 5c0 2.5-4 5-8 5"></svg:path><svg:path d="M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614 0 5.248 3.915 5.5 8"></svg:path></svg:g>`,
})
export class TablerEggsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
