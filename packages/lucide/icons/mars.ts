import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMarsIcon],svg[lucide-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3h5v5m0-5l-6.75 6.75"></svg:path><svg:circle cx="10" cy="14" r="6"></svg:circle></svg:g>`,
})
export class LucideMarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
