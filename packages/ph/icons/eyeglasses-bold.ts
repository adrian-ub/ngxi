import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesBoldIcon],svg[ph-eyeglasses-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36a12 12 0 0 0 0 24a12 12 0 0 1 12 12v50.46A47.94 47.94 0 0 0 142.75 148h-29.5A47.94 47.94 0 0 0 44 122.46V72a12 12 0 0 1 12-12a12 12 0 0 0 0-24a36 36 0 0 0-36 36v92a48 48 0 0 0 95.32 8h25.36a48 48 0 0 0 95.32-8V72a36 36 0 0 0-36-36M68 188a24 24 0 1 1 24-24a24 24 0 0 1-24 24m120 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhEyeglassesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
