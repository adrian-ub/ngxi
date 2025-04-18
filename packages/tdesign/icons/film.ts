import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilmIcon],svg[tdesign-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 1 9 9c0 2.453-.98 4.676-2.573 6.3A8.97 8.97 0 0 1 12 21a9 9 0 1 1 0-18m6.326 18q.826-.582 1.53-1.3A10.97 10.97 0 0 0 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11h12v-2zM12 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2M9 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m13-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
