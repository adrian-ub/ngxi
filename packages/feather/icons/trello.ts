import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherTrelloIcon],svg[feather-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2"></svg:rect><svg:path d="M7 7h3v9H7zm7 0h3v5h-3z"></svg:path></svg:g>`,
})
export class FeatherTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
