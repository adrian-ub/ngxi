import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleBoldIcon],svg[ph-copy-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 64H40a12 12 0 0 0-12 12v140a12 12 0 0 0 12 12h140a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12m-12 140H52V88h116Zm60-164v140a12 12 0 0 1-24 0V52H76a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCopySimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
