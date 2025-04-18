import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitFillIcon],svg[ph-prohibit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 128a71.7 71.7 0 0 1-15.78 44.91L83.09 71.78A71.95 71.95 0 0 1 200 128m-144 0a71.95 71.95 0 0 0 116.91 56.22L71.78 83.09A71.7 71.7 0 0 0 56 128m180 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-20 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhProhibitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
