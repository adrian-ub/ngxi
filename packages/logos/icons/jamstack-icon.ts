import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosJamstackIconIcon],svg[logos-jamstack-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F0047F" d="M128 0C57.221 0 0 57.221 0 128s57.221 128 128 128s128-57.222 128-128V0z"></svg:path><svg:path fill="#FFF" d="M121.04 134.96v93.312c-49.663-2.837-89.64-42.345-93.215-91.81l-.097-1.502zm90.962 0c-2.6 49.664-38.816 89.64-84.159 93.215l-1.377.097V134.96zm.112-91.074v85.648h-85.648V43.886z"></svg:path>`,
})
export class LogosJamstackIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
