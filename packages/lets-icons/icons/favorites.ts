import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFavoritesIcon],svg[lets-icons-favorites-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 11.5c0 5.068-5.972 8.47-7.596 9.302a.88.88 0 0 1-.808 0C9.972 19.97 4 16.568 4 11.5C4 7 7.876 4 12 4c4.267 0 8 3 8 7.5Z"></svg:path><svg:path d="m8.97 11.81l2.799 2.947c.092.097.139.146.195.157a.2.2 0 0 0 .072 0c.056-.011.103-.06.195-.157l2.799-2.946a1.806 1.806 0 1 0-2.898-2.107l-.07.128a.071.071 0 0 1-.124 0l-.07-.128A1.806 1.806 0 1 0 8.97 11.81Z"></svg:path></svg:g>`,
})
export class LetsIconsFavoritesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
