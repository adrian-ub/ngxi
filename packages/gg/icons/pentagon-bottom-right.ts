import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonBottomRightIcon],svg[gg-pentagon-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.33 8.232L13.66 4l5 8.66l-3.33 4.232l-5.33.768L5 9zm-2.12 2.326l3.197-.46l1.998-2.54l2.846 4.93l-1.998 2.539l-3.198.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
