import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandZhihuIcon],svg[tabler-brand-zhihu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6h6v12h-2l-2 2l-1-2h-1zM4 12h6.5m0-6h-5M6 4c-.5 2.5-1.5 3.5-2.5 4.5M8 6v7c0 4.5-2 5.5-4 7m7-2l-3-5"></svg:path>`,
})
export class TablerBrandZhihuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
