import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPiBoldIcon],svg[ph-pi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 172a40 40 0 0 1-80 0V76h-56v124a12 12 0 0 1-24 0V76h-4a36 36 0 0 0-36 36a12 12 0 0 1-24 0a60.07 60.07 0 0 1 60-60h152a12 12 0 0 1 0 24h-44v96a16 16 0 0 0 32 0a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhPiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
