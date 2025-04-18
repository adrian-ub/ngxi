import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLabelIcon],svg[bxs-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.813 4.419A1 1 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a1 1 0 0 0 .813-.419l5-7a1 1 0 0 0 0-1.162z"></svg:path>`,
})
export class BxsLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
