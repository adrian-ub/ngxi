import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsThumbDownIcon],svg[lets-icons-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M8.85 5H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.85a.15.15 0 0 0 .15-.15v-7.7A.15.15 0 0 0 8.85 5ZM9 13l1.832 2.748a1 1 0 0 1 .168.555V19a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-5"></svg:path><svg:path d="M13 13h4.765a2 2 0 0 0 1.988-2.22l-.555-5A2 2 0 0 0 17.21 4h-3.796a1 1 0 0 0-.707.293l-.414.414a1 1 0 0 1-.707.293H9"></svg:path></svg:g>`,
})
export class LetsIconsThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
