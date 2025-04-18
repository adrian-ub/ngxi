import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotate3dIcon],svg[tabler-rotate-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a7 7 0 0 1 7 7v4l-3-3m6 0l-3 3M8 15.5l-5-3l5-3l5 3V18l-5 3z"></svg:path><svg:path d="M3 12.5V18l5 3m0-5.455l5-3.03"></svg:path></svg:g>`,
})
export class TablerRotate3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
