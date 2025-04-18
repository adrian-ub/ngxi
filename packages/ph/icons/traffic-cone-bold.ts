import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeBoldIcon],svg[ph-traffic-cone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 204h-15.47L157.2 33.43A20 20 0 0 0 138.31 20h-20.62A20 20 0 0 0 98.8 33.43L39.47 204H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M98.27 108h59.46l13.91 40H84.36Zm22.26-64h14.94l13.91 40h-42.76ZM76 172h104l11.13 32H64.88Z"></svg:path>`,
})
export class PhTrafficConeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
