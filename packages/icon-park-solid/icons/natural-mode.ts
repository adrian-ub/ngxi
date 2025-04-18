import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNaturalModeIcon],svg[icon-park-solid-natural-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path d="M24 27c-5.657 0-9.935-4.343-9.935-10L14 7l5 4l5-6l5 6l5-4v10c0 5.657-4.342 10-10 10m-.514 16.314c1.562-1.562-.337-5.995-4.242-9.9c-3.906-3.905-8.338-5.805-9.9-4.242s.337 5.994 4.243 9.9c3.905 3.904 8.337 5.804 9.9 4.242"></svg:path><svg:path d="M24.829 42.97c1.562 1.563 5.994-.337 9.9-4.242c3.905-3.905 5.804-8.338 4.242-9.9s-5.994.338-9.9 4.243c-3.905 3.905-5.804 8.337-4.242 9.9"></svg:path></svg:g>`,
})
export class IconParkSolidNaturalModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
