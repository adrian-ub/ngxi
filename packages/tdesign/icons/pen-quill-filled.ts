import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenQuillFilledIcon],svg[tdesign-pen-quill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.301 8.118L12.162 19.212l-5.416-.697l-3.673 3.673l-1.414-1.414l3.669-3.67l-.742-5.41L15.672.565l1.816 5.787z"></svg:path>`,
})
export class TdesignPenQuillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
