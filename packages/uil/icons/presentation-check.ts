import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPresentationCheckIcon],svg[uil-presentation-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.29 11.71a1 1 0 0 0 1.42 0l4-4a1 1 0 1 0-1.42-1.42L11 9.59l-1.29-1.3a1 1 0 0 0-1.42 1.42ZM21 14h-1V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2m-3 0H6V4h12Z"></svg:path>`,
})
export class UilPresentationCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
