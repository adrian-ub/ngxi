import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarSportsIcon],svg[mdi-car-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.5H7L4 11H3c-1.11 0-2 .89-2 2v3h2.17c.43 1.2 1.56 2 2.83 2s2.4-.8 2.82-2h6.35c.43 1.2 1.56 2 2.83 2s2.4-.8 2.82-2H23v-1c0-1.11-1.03-1.47-2-2zM5.25 12l2.25-2h4l4 2zM6 13.5A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarSportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
