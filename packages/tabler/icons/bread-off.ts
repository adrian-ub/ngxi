import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBreadOffIcon],svg[tabler-bread-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 4l10 .005V4a3 3 0 0 1 2 5.235V16m-.59 3.418c-.36.36-.86.582-1.41.582H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 .418-4.785M3 3l18 18"></svg:path>`,
})
export class TablerBreadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
