import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleThinIcon],svg[ph-push-pin-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 172h-12.64L180.77 44H192a4 4 0 0 0 0-8H64a4 4 0 0 0 0 8h11.23L52.64 172H40a4 4 0 0 0 0 8h84v60a4 4 0 0 0 8 0v-60h84a4 4 0 0 0 0-8M83.36 44h89.28l22.59 128H60.77Z"></svg:path>`,
})
export class PhPushPinSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
