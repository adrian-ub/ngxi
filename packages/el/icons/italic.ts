import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elItalicIcon],svg[el-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M578.299 1114.803h152.713L714.133 1200H245.546l16.879-85.197h152.713L620.897 86.001H468.185L485.867 0h468.587l-17.683 86.001H784.059z"></svg:path>`,
})
export class ElItalicIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
