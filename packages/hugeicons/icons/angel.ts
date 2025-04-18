import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAngelIcon],svg[hugeicons-angel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.078 7.5A9.9 9.9 0 0 0 2 12.015C2 17.529 6.477 22 12 22s10-4.47 10-9.985A9.9 9.9 0 0 0 20.922 7.5"></svg:path><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2"></svg:path><svg:ellipse cx="12" cy="4" rx="10" ry="2"></svg:ellipse><svg:path d="M7 10.5a1.5 1.5 0 0 1 3 0m4 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsAngelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
