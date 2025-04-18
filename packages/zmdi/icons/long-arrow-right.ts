import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowRightIcon],svg[zmdi-long-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171h302l-76-77l30-30l128 128l-128 128l-30-30l76-77H0z"></svg:path>`,
})
export class ZmdiLongArrowRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
