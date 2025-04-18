import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeSendToBackIcon],svg[mdi-arrange-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm7 2H4v5h5zm13 9v9h-9v-9zm-7 7h5v-5h-5zm1-12v3h-3V8zm-5 8H8v-3h3z"></svg:path>`,
})
export class MdiArrangeSendToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
