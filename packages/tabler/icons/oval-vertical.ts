import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOvalVerticalIcon],svg[tabler-oval-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c0-3.314 4.03-6 9-6s9 2.686 9 6s-4.03 6-9 6s-9-2.686-9-6"></svg:path>`,
})
export class TablerOvalVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
