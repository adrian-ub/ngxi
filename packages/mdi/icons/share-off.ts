import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShareOffIcon],svg[mdi-share-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-5.2-5.2L14 19v-3.1l-.9-1c-4.5.3-7.7 1.9-10.1 5.2c.58-3.79 2.72-7.16 5.9-9.3L1.1 3l1.3-1.3l19.7 19.8m-4-6.6L21 12l-7-7v4l-1.5.3"></svg:path>`,
})
export class MdiShareOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
