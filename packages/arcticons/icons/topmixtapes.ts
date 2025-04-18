import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTopmixtapesIcon],svg[arcticons-topmixtapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.51 12.225v25.664m7.949-18.555v11.473M24.137 5.5v37M13.9 5.5h20.475m-18.556 9.113v20.805M7.541 19.361v11.282"></svg:path>`,
})
export class ArcticonsTopmixtapesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
