import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeltaIcon],svg[mdi-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.77L18.39 18H5.61zM12 4L2 20h20"></svg:path>`,
})
export class MdiDeltaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
