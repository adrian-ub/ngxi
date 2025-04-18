import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsThumbUpIcon],svg[lets-icons-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M8.85 19H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2.85a.15.15 0 0 1 .15.15v7.7a.15.15 0 0 1-.15.15ZM9 11l1.832-2.748A1 1 0 0 0 11 7.697V5a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v5"></svg:path><svg:path d="M13 11h4.765a2 2 0 0 1 1.988 2.22l-.555 5A2 2 0 0 1 17.21 20h-3.796a1 1 0 0 1-.707-.293l-.414-.414a1 1 0 0 0-.707-.293H9"></svg:path></svg:g>`,
})
export class LetsIconsThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
