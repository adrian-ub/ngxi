import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchIcon],svg[lets-icons-chat-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.462 20H4a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3.385M7 14h3m-3-4h6"></svg:path><svg:circle cx="16.5" cy="15.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="m18.5 17.5l3 3"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
