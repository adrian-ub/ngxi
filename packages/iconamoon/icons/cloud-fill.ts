import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudFillIcon],svg[iconamoon-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.303 6.697a7.5 7.5 0 0 0-12.47 3.088A5.002 5.002 0 0 0 6.5 19.5h12a4 4 0 0 0 .99-7.876a7.47 7.47 0 0 0-2.187-4.927" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
