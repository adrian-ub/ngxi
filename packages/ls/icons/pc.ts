import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPcIcon],svg[ls-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 4h598c33 0 60 26 60 59v382c0 33-27 61-60 61H424v99h170c25 0 27 82 30 85H93s0-85 30-85h170v-99H59c-33 0-59-28-59-61V63C0 30 26 4 59 4m0 441h598V63H59z"></svg:path>`,
})
export class LsPcIcon {
  readonly viewBox = input("0 0 717 690")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
