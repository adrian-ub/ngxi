import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEditCircleIcon],svg[tabler-edit-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 15l8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zm4-10l3 3"></svg:path><svg:path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6"></svg:path></svg:g>`,
})
export class TablerEditCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
