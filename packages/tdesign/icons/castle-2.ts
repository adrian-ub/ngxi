import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle2Icon],svg[tdesign-castle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v1.083A6 6 0 0 0 6 9a5 5 0 0 0-5 5v8h22v-8a5 5 0 0 0-5-5a6 6 0 0 0-5-5.917V2zm7 9a3 3 0 0 1 3 3v6h-3zm-2 9h-3v-5h-2v5H8V10h8zM6 20H3v-6a3 3 0 0 1 3-3zM8.126 8a4.002 4.002 0 0 1 7.748 0z"></svg:path>`,
})
export class TdesignCastle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
