import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTempleHinduIcon],svg[mdi-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2V1H9v2.1L8.1 6z"></svg:path>`,
})
export class MdiTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
