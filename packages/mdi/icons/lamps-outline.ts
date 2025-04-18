import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLampsOutlineIcon],svg[mdi-lamps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 4l.85 3h-4.7l.85-3zM10 2H4L2 9h10zm-4 8h2v10h3v2H3v-2h3zm12.5 0l.85 3h-4.7l.85-3zM20 8h-6l-2 7h10zm-4 8h2v4h3v2h-8v-2h3z"></svg:path>`,
})
export class MdiLampsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
