import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillStopwatchIcon],svg[quill-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.9 7.869a15 15 0 0 0-2.769-2.77m-7.434-.988a13 13 0 0 0-3.394 0m12.304 2.282l-2.829 2.829M16 17l5 5m6-5c0 6.075-4.925 11-11 11S5 23.075 5 17S9.925 6 16 6s11 4.925 11 11"></svg:path>`,
})
export class QuillStopwatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
