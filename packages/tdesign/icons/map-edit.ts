import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapEditIcon],svg[tdesign-map-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm11.787-4.747l4.127 4.127l-7.286 7.287H12.5l-.001-4.128zm-.922 3.75l1.299 1.3l.922-.923l-1.3-1.299zm-.115 2.713l-1.3-1.299l-2.95 2.95v1.3h1.3z"></svg:path>`,
})
export class TdesignMapEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
