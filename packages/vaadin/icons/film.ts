import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFilmIcon],svg[vaadin-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h1v-1h1v1h12v-1h1v1h1V0zm2 14H1v-1h1zm0-2H1v-1h1zm0-2H1V9h1zm0-2H1V7h1zm0-2H1V5h1zm0-2H1V3h1zm0-2H1V1h1zm11 13H3V9h10zm0-8H3V1h10zm2 7h-1v-1h1zm0-2h-1v-1h1zm0-2h-1V9h1zm0-2h-1V7h1zm0-2h-1V5h1zm0-2h-1V3h1zm0-2h-1V1h1z"></svg:path>`,
})
export class VaadinFilmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
