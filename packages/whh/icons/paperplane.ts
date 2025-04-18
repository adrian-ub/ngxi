import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPaperplaneIcon],svg[whh-paperplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512v352q0 13-9.5 22.5T864 896h-64L656 752l-272 272L0 0l1024 384zm-64 0L128 128l704 704z"></svg:path>`,
})
export class WhhPaperplaneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
