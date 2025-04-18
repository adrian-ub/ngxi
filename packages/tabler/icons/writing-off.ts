import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWritingOffIcon],svg[tabler-writing-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7h4m-4 9v1l2 2l.5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7m2 7H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6M3 3l18 18"></svg:path>`,
})
export class TablerWritingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
