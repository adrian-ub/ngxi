import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagThinIcon],svg[ph-tag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 138.83l-99.32-99.32a11.93 11.93 0 0 0-8.48-3.51H40a4 4 0 0 0-4 4v92.69a11.93 11.93 0 0 0 3.51 8.48l99.32 99.32a12 12 0 0 0 17 0l84.69-84.69a12 12 0 0 0 0-17Zm-5.66 11.31l-84.69 84.69a4 4 0 0 1-5.65 0l-99.32-99.32a4 4 0 0 1-1.17-2.82V44h88.69a4 4 0 0 1 2.82 1.17l99.32 99.32a4 4 0 0 1 0 5.65M92 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
