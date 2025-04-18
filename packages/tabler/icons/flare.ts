import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlareIcon],svg[tabler-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l3 6l6 3l-6 3l-3 6l-3-6l-6-3l6-3z"></svg:path>`,
})
export class TablerFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
