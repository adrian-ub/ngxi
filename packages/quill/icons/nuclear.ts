import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillNuclearIcon],svg[quill-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path fill="currentColor" d="M11.1 17a5 5 0 0 0 1.585 2.743l-2.024 3.504A9 9 0 0 1 7.056 17zm8.216 2.743A5 5 0 0 0 20.9 17h4.045a9 9 0 0 1-3.607 6.247zM16 11c-.553 0-1.086.09-1.584.256l-2.023-3.504A9 9 0 0 1 16 7c1.284 0 2.504.268 3.607.752l-2.023 3.504A5 5 0 0 0 16 11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 16a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class QuillNuclearIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
