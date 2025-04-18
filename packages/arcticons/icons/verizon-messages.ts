import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVerizonMessagesIcon],svg[arcticons-verizon-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38 8.81H19.266a4.5 4.5 0 0 0-4.5 4.5v13.244a4.5 4.5 0 0 0 4.5 4.5h6.287l9.553 4.325v-4.324H38a4.5 4.5 0 0 0 4.5-4.5V13.31a4.5 4.5 0 0 0-4.5-4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.17 31.166v1.894c0 1.76-1.42 3.18-3.17 3.18h-4.08l-6.35 2.95v-2.95h-1.9c-1.75 0-3.17-1.42-3.17-3.18v-8.72c0-1.75 1.42-3.17 3.17-3.17h5.92"></svg:path>`,
})
export class ArcticonsVerizonMessagesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
