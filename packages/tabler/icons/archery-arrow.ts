import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArcheryArrowIcon],svg[tabler-archery-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7v3h3l3-3h-3V4zm0 3l-9 9m0-4v4h4"></svg:path>`,
})
export class TablerArcheryArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
