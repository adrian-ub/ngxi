import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpell4wikiIcon],svg[arcticons-spell4wiki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.817 5.25l8.24 21.972L27.295 5.25m-6.592 0l8.24 21.972l8.24-21.972m-29.662 0h6.592m4.394 0h4.394m10.986 0h6.592m-15.38 0h4.394M24 29.968a2.754 2.754 0 0 1 2.747 2.747v3.296a2.747 2.747 0 0 1-5.493 0v-3.296A2.754 2.754 0 0 1 24 29.968m1.099 10.766v3.516H22.9v-3.516"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.606 37.109a4.483 4.483 0 0 0 8.789 0"></svg:path>`,
})
export class ArcticonsSpell4wikiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
