import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeathStarIcon],svg[mdi-death-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h19.9c-.5 5.05-4.76 9-9.95 9c-5.18 0-9.45-3.95-9.95-9m19.9-2H2.05c.5-5.05 4.77-9 9.95-9s9.45 3.95 9.95 9M12 6.75a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 7 6.75a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5"></svg:path>`,
})
export class MdiDeathStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
