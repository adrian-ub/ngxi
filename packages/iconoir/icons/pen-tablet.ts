import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPenTabletIcon],svg[iconoir-pen-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2ZM2 12h4m0-9v18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.5 11.5l-3.5 3m5-4.49l.01-.011"></svg:path></svg:g>`,
})
export class IconoirPenTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
