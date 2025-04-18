import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposurePlus2Icon],svg[tabler-exposure-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9a4 4 0 1 1 8 0c0 1.098-.564 2.025-1.159 2.815L12 19h8M3 12h6M6 9v6"></svg:path>`,
})
export class TablerExposurePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
