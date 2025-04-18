import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSaveFIcon],svg[jam-save-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18.565v-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7H2a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h11.22a2 2 0 0 1 1.345.52l2.78 2.527A2 2 0 0 1 18 5.092v11.473a2 2 0 0 1-2 2zm-1-15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m-8 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 9h6v4H6zm0-5v-3h3v3z"></svg:path>`,
})
export class JamSaveFIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
