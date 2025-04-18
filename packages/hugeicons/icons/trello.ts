import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrelloIcon],svg[hugeicons-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M6 8c0-.943 0-1.414.293-1.707S7.057 6 8 6h.5c.943 0 1.414 0 1.707.293S10.5 7.057 10.5 8v7c0 .943 0 1.414-.293 1.707S9.443 17 8.5 17H8c-.943 0-1.414 0-1.707-.293S6 15.943 6 15zm7.5 0c0-.943 0-1.414.293-1.707S14.557 6 15.5 6h.5c.943 0 1.414 0 1.707.293S18 7.057 18 8v2c0 .943 0 1.414-.293 1.707S16.943 12 16 12h-.5c-.943 0-1.414 0-1.707-.293S13.5 10.943 13.5 10z"></svg:path></svg:g>`,
})
export class HugeiconsTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
