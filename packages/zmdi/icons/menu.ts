import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMenuIcon],svg[zmdi-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 336v-48h432v48zm0-120v-48h432v48zM0 48h432v48H0z"></svg:path>`,
})
export class ZmdiMenuIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
