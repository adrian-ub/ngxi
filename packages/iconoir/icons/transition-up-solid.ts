import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTransitionUpSolidIcon],svg[iconoir-transition-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M2.25 17A3.75 3.75 0 0 1 6 13.25h12A3.75 3.75 0 0 1 21.75 17v2A3.75 3.75 0 0 1 18 22.75H6A3.75 3.75 0 0 1 2.25 19zM7 2.75A3.25 3.25 0 0 0 3.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 7 1.25h10A4.75 4.75 0 0 1 21.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 17 2.75z"></svg:path><svg:path d="M11.47 5.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V14a.75.75 0 0 1-1.5 0V7.81L9.53 9.53a.75.75 0 0 1-1.06-1.06z"></svg:path></svg:g>`,
})
export class IconoirTransitionUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
