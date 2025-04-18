import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBicycleIcon],svg[guidance-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 6h4M7 8.5h9.5m3.5-5h-3.5v4c0 2.808.322 4.329 1.224 6.111c.469.927 1.237 1.889 2.276 1.889m-12.5-7c-.098 2.45-.41 3.617-1.208 5.12c-.487.918-1.253 1.88-2.292 1.88m1.5 5a5 5 0 1 1 0-10a5 5 0 0 1 0 10Zm13 0a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"></svg:path>`,
})
export class GuidanceBicycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
