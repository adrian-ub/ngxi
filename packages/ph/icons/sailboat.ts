import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSailboatIcon],svg[ph-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.21 172.53A8 8 0 0 0 240 168h-96v-24h72a8 8 0 0 0 5.92-13.38L144 44.91V8a8 8 0 0 0-14.21-5l-104 128A8 8 0 0 0 32 144h96v24H16a8 8 0 0 0-6.25 13l29.6 37a15.93 15.93 0 0 0 12.49 6h152.32a15.93 15.93 0 0 0 12.49-6l29.6-37a8 8 0 0 0 .96-8.47M197.92 128H144V68.69Zm-149.11 0L128 30.53V128Zm155.35 80H51.84l-19.2-24h190.72Z"></svg:path>`,
})
export class PhSailboatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
