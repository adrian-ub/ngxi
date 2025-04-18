import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkTilgjengelighetIcon],svg[nrk-tilgjengelighet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5 3h3v1l-1 5h2l1-5l1 5h2l-1-5v-1h3v-2H7z"></svg:path><svg:path fill="currentColor" d="M12 1a11 11 0 1 0 .01 22.01A11 11 0 0 0 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9s9 4.04 9 9s-4.04 9-9 9"></svg:path>`,
})
export class NrkTilgjengelighetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
