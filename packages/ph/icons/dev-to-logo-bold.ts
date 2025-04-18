import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoBoldIcon],svg[ph-dev-to-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24A20 20 0 0 0 4 72v112a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20m-4 128H28V76h200Zm-120-24v-56a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-8v4a12 12 0 0 1 0 24v4h8a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12m52.46-52.7a12 12 0 1 1 23.08-6.6l4.46 15.62l4.46-15.62a12 12 0 0 1 23.08 6.6l-16 56a12 12 0 0 1-23.08 0ZM52 168h12a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36H52a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12m12-56a12 12 0 0 1 12 12v8a12 12 0 0 1-12 12Z"></svg:path>`,
})
export class PhDevToLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
