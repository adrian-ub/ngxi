import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudClockFillIcon],svg[iconamoon-cloud-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088M12 11v2h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
