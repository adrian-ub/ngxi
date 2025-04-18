import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpThinIcon],svg[ph-arrow-u-right-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.83 82.83a4 4 0 0 1-5.66 0L172 41.66V168a60 60 0 0 1-120 0V80a4 4 0 0 1 8 0v88a52 52 0 0 0 104 0V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowURightUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
