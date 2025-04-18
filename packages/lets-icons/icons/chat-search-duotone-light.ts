import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchDuotoneLightIcon],svg[lets-icons-chat-search-duotone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsChatSearchDuotoneLight0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" stroke-width="1.2" d="M7.5 10.5h7m-7 3h5"></svg:path><svg:circle cx="16.5" cy="15.5" r="2" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="m19 18l1.5 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsChatSearchDuotoneLight0)"></svg:path>`,
})
export class LetsIconsChatSearchDuotoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
