import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCaseCamelIcon],svg[lucide-lab-case-camel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7" cy="13" r="3"></svg:circle><svg:path d="M10 10v6m4-4h4.5a2 2 0 0 1 0 4H14V8h4a2 2 0 0 1 0 4"></svg:path></svg:g>`,
})
export class LucideLabCaseCamelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
