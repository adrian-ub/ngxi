import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGiggleFilledIcon],svg[tdesign-giggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m3.54-13.094l1.822-1.025l-.98-1.743L13 9.04v1.46l3.2 2.4l1.2-1.6zM9 12V8H7v4zm3 7a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5"></svg:path>`,
})
export class TdesignGiggleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
