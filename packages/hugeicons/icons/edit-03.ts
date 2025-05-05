import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdit03Icon],svg[hugeicons-edit-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3.782 16.31L3 21l4.69-.782a3.96 3.96 0 0 0 2.151-1.106L20.42 8.532a1.98 1.98 0 0 0 0-2.8L18.269 3.58a1.98 1.98 0 0 0-2.802 0L4.888 14.16a3.96 3.96 0 0 0-1.106 2.15M14 6l4 4" color="currentColor"></svg:path>`,
})
export class HugeiconsEdit03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
