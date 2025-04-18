import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMaskIcon],svg[icon-park-outline-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M14 14h20c5.523 0 10 4.477 10 10v3c0 7.18-5.82 13-13 13H17C9.82 40 4 34.18 4 27v-3c0-5.523 4.477-10 10-10Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M18 27h12m-6-6v12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 25.042V12.014A4.168 4.168 0 0 1 11.047 9q2.399 2.29 3.424 5M44 25.042V12.766A4.478 4.478 0 0 0 36 10a111 111 0 0 0-3 4"></svg:path></svg:g>`,
})
export class IconParkOutlineMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
