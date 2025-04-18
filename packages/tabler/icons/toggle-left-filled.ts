import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToggleLeftFilledIcon],svg[tabler-toggle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 8 9"></svg:path><svg:path d="M16 5a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 2H8a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10"></svg:path></svg:g>`,
})
export class TablerToggleLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
