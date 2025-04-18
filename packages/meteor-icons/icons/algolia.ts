import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlgoliaIcon],svg[meteor-icons-algolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.1 11A4.25 4.25 0 0 0 9 9a4 4 0 0 0 6 6l6 6V2h-9a1 1 0 0 0 0 20q2 0 3-.5"></svg:path>`,
})
export class MeteorIconsAlgoliaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
