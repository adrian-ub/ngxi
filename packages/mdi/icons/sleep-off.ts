import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSleepOffIcon],svg[mdi-sleep-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-6-6H9v-2l.79-.94zM23 12h-6v-2l3.39-4H17V4h6v2l-3.38 4H23zM9.82 8H15v2l-1.46 1.72zM7 20H1v-2l3.39-4H1v-2h6v2l-3.38 4H7z"></svg:path>`,
})
export class MdiSleepOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
