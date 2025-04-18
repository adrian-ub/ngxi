import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEnvelopIcon],svg[icomoon-free-envelop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-13C.675 2 0 2.675 0 3.5v10c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-10c0-.825-.675-1.5-1.5-1.5M6.23 8.6L2 11.895V4.057zM2.756 4h10.488L8 7.938zm3.639 4.777L8 10.5l1.605-1.723L12.895 13h-9.79zM9.77 8.6L14 4.057v7.838z"></svg:path>`,
})
export class IcomoonFreeEnvelopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
