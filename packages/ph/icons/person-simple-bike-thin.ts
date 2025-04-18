import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleBikeThinIcon],svg[ph-person-simple-bike-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m36 104a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28M56 140a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m136-88h-40a4 4 0 0 1-2.83-1.17L120 85.66L93.66 112l37.17 37.17A4 4 0 0 1 132 152v48a4 4 0 0 1-8 0v-46.34l-38.83-38.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0L153.66 108H192a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhPersonSimpleBikeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
