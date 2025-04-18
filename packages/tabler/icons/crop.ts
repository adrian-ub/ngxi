import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCropIcon],svg[tabler-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 5v10a1 1 0 0 0 1 1h10"></svg:path><svg:path d="M5 8h10a1 1 0 0 1 1 1v10"></svg:path></svg:g>`,
})
export class TablerCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
