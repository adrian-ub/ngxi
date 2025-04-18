import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFloatIcon],svg[icon-park-outline-float-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40c11.046 0 20-7.163 20-16S35.046 8 24 8S4 15.163 4 24s8.954 16 20 16Z"></svg:path><svg:path d="M24 28c5.523 0 10-2.686 10-6s-4.477-6-10-6s-10 2.686-10 6s4.477 6 10 6Z"></svg:path><svg:path stroke-linecap="round" d="M24 16V8m8 10s2.625-4 7-4m-23 4s-2-4-7-4m9 13s-6 2-7 9m19-9s6.5 2 7 9"></svg:path></svg:g>`,
})
export class IconParkOutlineFloatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
