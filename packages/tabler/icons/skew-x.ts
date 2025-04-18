import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkewXIcon],svg[tabler-skew-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5.205v13.59a1 1 0 0 0 1.184.983l14-2.625A1 1 0 0 0 20 16.17V7.83a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.205"></svg:path>`,
})
export class TablerSkewXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
