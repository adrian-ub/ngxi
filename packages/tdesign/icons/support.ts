import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSupportIcon],svg[tdesign-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.382 4.968l2.86 2.86a5.01 5.01 0 0 1 5.516 0l2.86-2.86a9.004 9.004 0 0 0-11.236 0m12.65 1.414l-2.86 2.86a5.01 5.01 0 0 1 0 5.516l2.86 2.86a9.004 9.004 0 0 0 0-11.236m-1.414 12.65l-2.86-2.86a5.01 5.01 0 0 1-5.516 0l-2.86 2.86a9.004 9.004 0 0 0 11.236 0m-12.65-1.414l2.86-2.86a5.01 5.01 0 0 1 0-5.516l-2.86-2.86a9.004 9.004 0 0 0 0 11.236M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m9.9 5.657a3 3 0 1 0-4.243 4.242A3 3 0 0 0 14.12 9.88"></svg:path>`,
})
export class TdesignSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
