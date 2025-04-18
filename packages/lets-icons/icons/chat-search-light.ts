import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchLightIcon],svg[lets-icons-chat-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h7m-7 3h5"></svg:path><svg:circle cx="16.5" cy="15.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="m19 18l1.5 1.5"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
