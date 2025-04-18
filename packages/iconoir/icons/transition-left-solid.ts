import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTransitionLeftSolidIcon],svg[iconoir-transition-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M13.25 6A3.75 3.75 0 0 1 17 2.25h2A3.75 3.75 0 0 1 22.75 6v12A3.75 3.75 0 0 1 19 21.75h-2A3.75 3.75 0 0 1 13.25 18zm-12 1A4.75 4.75 0 0 1 6 2.25h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 7v10A3.25 3.25 0 0 0 6 20.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 17z"></svg:path><svg:path d="M9.53 8.47a.75.75 0 0 1 0 1.06l-1.72 1.72H14a.75.75 0 0 1 0 1.5H7.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class IconoirTransitionLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
