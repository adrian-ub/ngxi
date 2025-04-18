import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleBoldIcon],svg[ph-push-pin-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 164h-5.93L190.3 52h1.7a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h1.7L45.93 164H40a12 12 0 0 0 0 24h76v52a12 12 0 0 0 24 0v-52h76a12 12 0 0 0 0-24M90.07 52h75.86l19.77 112H70.3Z"></svg:path>`,
})
export class PhPushPinSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
