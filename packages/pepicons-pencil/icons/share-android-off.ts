import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidOffIcon],svg[pepicons-pencil-share-android-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m6.754 9.18l-.508-.86l5.5-3.25l.508.86zM12 14.878l.479-.878l-5.5-3l-.479.878z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilShareAndroidOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
