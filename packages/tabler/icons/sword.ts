import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwordIcon],svg[tabler-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v5l-9 7l-4 4l-3-3l4-4l7-9zM6.5 11.5l6 6"></svg:path>`,
})
export class TablerSwordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
