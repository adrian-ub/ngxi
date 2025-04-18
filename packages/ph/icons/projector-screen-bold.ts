import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenBoldIcon],svg[ph-projector-screen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 72V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V164h-4a12 12 0 0 0 0 24h84v23.22a24 24 0 1 0 24 0V188h84a12 12 0 0 0 0-24h-4V91.6A20 20 0 0 0 236 72M44 52h168v16H44Zm16 112V92h136v72Z"></svg:path>`,
})
export class PhProjectorScreenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
