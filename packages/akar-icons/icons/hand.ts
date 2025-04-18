import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsHandIcon],svg[akar-icons-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 16V8.5c0-.828-.641-1.5-1.48-1.5C18 7 17 7.3 17 8.5v-3c0-.828-.641-1.5-1.48-1.5c-.507 0-1.52.3-1.52 1.5v-2c0-.828-.641-1.5-1.48-1.5c-.84 0-1.52.672-1.52 1.5v2C11 4.3 10.007 4 9.5 4C8.66 4 8 4.691 8 5.52V14m3-8.5V11m3-5.5V11m3-5.5V11"></svg:path><svg:path d="M20 16c0 4-3.134 6-7 6s-5.196-1-8.196-6l-1.571-2.605c-.536-.868-.107-1.994.881-2.314a1.66 1.66 0 0 1 1.818.552L8 14.033"></svg:path></svg:g>`,
})
export class AkarIconsHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
