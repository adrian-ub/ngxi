import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWinkFilledIcon],svg[tdesign-wink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m3.54-13.094l1.822-1.025l-.98-1.743L13 9.04v1.46l3.2 2.4l1.2-1.6zM9 12V8H7v4zm.4 2.5l-.5-.866l-1.731 1.001l.5.866A5 5 0 0 0 12 18a5 5 0 0 0 4.33-2.5l.501-.865l-1.731-1.001l-.5.865A3 3 0 0 1 12 16a3 3 0 0 1-2.6-1.5"></svg:path>`,
})
export class TdesignWinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
