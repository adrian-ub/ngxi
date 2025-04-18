import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsBemIcon],svg[file-icons-bem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.933 407.885H512V467.2H302.933zm-68.019-239.352H119.467V44.8H0v366.933h234.914c38.763 0 70.187-33.211 70.187-71.974V237.184c0-38.767-31.424-68.65-70.187-68.65"></svg:path>`,
})
export class FileIconsBemIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
