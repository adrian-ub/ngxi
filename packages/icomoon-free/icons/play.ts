import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePlayIcon],svg[icomoon-free-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.331 2.502C13.087 2.179 10.607 2 8 2s-5.087.179-7.331.502C.239 4.185 0 6.045 0 8s.239 3.815.669 5.498C2.913 13.821 5.393 14 8 14s5.087-.179 7.331-.502C15.761 11.815 16 9.955 16 8s-.239-3.815-.669-5.498M6 11V5l5 3z"></svg:path>`,
})
export class IcomoonFreePlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
