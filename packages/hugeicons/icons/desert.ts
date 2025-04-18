import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesertIcon],svg[hugeicons-desert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 7v14m4-3v3m-9 0h12M4 13v.96c0 .845 0 1.268.201 1.616s.567.56 1.3.982L8 18m4-9v2.96c0 .845 0 1.268-.201 1.616s-.567.56-1.3.982L8 16"></svg:path><svg:circle cx="18" cy="6" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsDesertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
