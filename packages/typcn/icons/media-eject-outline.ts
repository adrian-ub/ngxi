import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaEjectOutlineIcon],svg[typcn-media-eject-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H8c-1.654 0-3-1.346-3-3s1.346-3 3-3h8c1.654 0 3 1.346 3 3s-1.346 3-3 3m-8-4a1.001 1.001 0 0 0 0 2h8a1.001 1.001 0 0 0 0-2zm4-10.134l4.964 5.096L17 12l-10 .004l.08-.087zM12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 2-2c0-.543-.218-1.033-.568-1.393z"></svg:path>`,
})
export class TypcnMediaEjectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
