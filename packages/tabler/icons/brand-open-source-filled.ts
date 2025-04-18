import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandOpenSourceFilledIcon],svg[tabler-brand-open-source-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.283 2.004a10 10 0 0 1 3.736 19.155a1 1 0 0 1-1.332-.551l-2.193-5.602a1 1 0 0 1 .456-1.245a2 2 0 1 0-1.9 0a1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1-1.332.552A10 10 0 0 1 12 2z"></svg:path>`,
})
export class TablerBrandOpenSourceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
