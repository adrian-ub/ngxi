import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDice4OutlineIcon],svg[mdi-dice-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9S9 8.33 9 7.5S8.33 6 7.5 6m9 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-9c-.83 0-1.5.67-1.5 1.5S15.67 9 16.5 9S18 8.33 18 7.5S17.33 6 16.5 6m-9 9c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18S9 17.33 9 16.5S8.33 15 7.5 15"></svg:path>`,
})
export class MdiDice4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
