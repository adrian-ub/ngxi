import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShortPantsPocketsIcon],svg[iconoir-short-pants-pockets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.06 5.655A.6.6 0 0 1 3.658 5h16.684a.6.6 0 0 1 .598.655l-1.176 12.8a.6.6 0 0 1-.597.545h-4.152a.6.6 0 0 1-.574-.424l-1.867-6.102c-.174-.566-.974-.566-1.148 0l-1.868 6.102a.6.6 0 0 1-.573.424H4.833a.6.6 0 0 1-.597-.545L3.643 12z"></svg:path><svg:path d="M4 9.5h1.5a2 2 0 0 0 2-2V5m13 4.5h-2a2 2 0 0 1-2-2V5"></svg:path></svg:g>`,
})
export class IconoirShortPantsPocketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
