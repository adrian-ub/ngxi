import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGarageIcon],svg[mdi-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-2v-9H7v9H5V9l7-4l7 4zM8 12h8v2H8zm0 3h8v2H8zm8 3v2H8v-2z"></svg:path>`,
})
export class MdiGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
