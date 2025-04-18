import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowRightIcon],svg[f7-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.762 28c0-.586-.234-1.125-.703-1.57L33.543 10.938c-.516-.516-1.031-.704-1.594-.704c-1.148 0-2.039.844-2.039 2.016c0 .563.188 1.101.563 1.477l5.25 5.343l7.898 7.196l-5.672-.352H8.301c-1.195 0-2.063.867-2.063 2.086s.867 2.086 2.063 2.086h29.648l5.696-.352l-7.922 7.196l-5.25 5.343c-.375.352-.563.914-.563 1.477c0 1.172.89 2.016 2.04 2.016c.562 0 1.054-.211 1.523-.657L49.059 29.57c.469-.445.703-.984.703-1.57"></svg:path>`,
})
export class F7ArrowRightIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
