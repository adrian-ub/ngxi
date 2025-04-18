import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCrookedSmileFilledIcon],svg[tdesign-crooked-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-.532 2.75l.25-.97l-1.937-.498l-.25.969c-.174.68-.468 1.08-.82 1.326c-.368.256-.91.423-1.711.423h-1v2h1c1.063 0 2.049-.22 2.855-.783c.82-.572 1.344-1.422 1.613-2.468"></svg:path>`,
})
export class TdesignCrookedSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
