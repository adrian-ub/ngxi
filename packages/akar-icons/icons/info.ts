import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsInfoIcon],svg[akar-icons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M12 7h.01"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 11h2v5m-2 0h4"></svg:path></svg:g>`,
})
export class AkarIconsInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
