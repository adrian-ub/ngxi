import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSortpuzIcon],svg[arcticons-sortpuz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.383 17.451v21.172c-.285 3.636-6.83 3.6-7.057.06l.06-21.291l-.777-.957l8.492-.06zm.115-9.201l-12.414 5.867l-.54 1.109l-3.642-7.672l1.279.196l8.07-3.846m-3.633 15.96v21.171c-.285 3.636-6.83 3.601-7.057.06l.06-21.29l-.777-.958l8.492-.06zm-10.765-2.39v21.171c-.285 3.636-6.83 3.601-7.057.06l.06-21.29l-.777-.958l8.492-.06z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSortpuzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
