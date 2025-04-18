import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStorageIcon],svg[zmdi-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 363v-86h427v86zm43-64v42h42v-42zM0 21h427v86H0zm85 64V43H43v42zM0 235v-86h427v86zm43-64v42h42v-42z"></svg:path>`,
})
export class ZmdiStorageIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
