import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNavigatorAltIcon],svg[iconoir-navigator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M13.93 17.869c-.322.93-1.637.929-1.958-.001l-1.62-4.694l-4.57-1.943c-.905-.385-.814-1.698.136-1.954L16.15 6.516a1.036 1.036 0 0 1 1.249 1.34z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirNavigatorAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
