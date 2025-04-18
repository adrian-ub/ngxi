import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAngryIcon],svg[hugeicons-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 17a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2M7 9.01s1.41-.127 2.196.498m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827M17 9.011s-1.41-.128-2.196.497m0 0l.263.835c.104.329-.167.657-.543.657c-.396 0-.657-.357-.453-.665a3.6 3.6 0 0 1 .733-.827"></svg:path></svg:g>`,
})
export class HugeiconsAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
