import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExplicitFilledIcon],svg[tabler-explicit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-5 4h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-3v-2h3a1 1 0 0 0 0-2h-3V9h3a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerExplicitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
