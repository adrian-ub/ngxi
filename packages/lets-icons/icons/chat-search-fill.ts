import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchFillIcon],svg[lets-icons-chat-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="17" cy="16" r="2.5" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m19 18l2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 10.2c0-2.52 0-3.78.49-4.743A4.5 4.5 0 0 1 4.457 3.49C5.42 3 6.68 3 9.2 3h5.6c2.52 0 3.78 0 4.743.49a4.5 4.5 0 0 1 1.967 1.967C22 6.42 22 7.68 22 10.2v3.506A5.5 5.5 0 1 0 14.706 21H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 19.48 2 18.92 2 17.8zm4-.2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
