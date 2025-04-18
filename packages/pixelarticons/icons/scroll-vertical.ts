import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScrollVerticalIcon],svg[pixelarticons-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v20H2zm9 18h2v-2h2v-2h2v-2h-2v2h-2V8h2v2h2V8h-2V6h-2V4h-2v2H9v2H7v2h2V8h2v8H9v-2H7v2h2v2h2zM22 2h-2v20h2z"></svg:path>`,
})
export class PixelarticonsScrollVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
