import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditOff03Icon],svg[hugeicons-edit-off-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m14 6l4 4M3 3l18 18M11.524 7.524l3.943-3.944a1.98 1.98 0 0 1 2.802 0l2.15 2.151a1.98 1.98 0 0 1 0 2.802l-3.943 3.943m-2 2l-4.635 4.636a3.96 3.96 0 0 1-2.15 1.106L3 21l.782-4.69a3.96 3.96 0 0 1 1.106-2.151l4.636-4.635" color="currentColor"></svg:path>`,
})
export class HugeiconsEditOff03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
