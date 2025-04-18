import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding4Icon],svg[tdesign-building-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h12v2h-1v4h2v14H2V8h8V4H9zm3 2v4h6V4zm8 6H4v10h4v-6h8v6h4zm-6 10v-4h-4v4zM13 4.998h2.004v2.004H13z"></svg:path>`,
})
export class TdesignBuilding4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
