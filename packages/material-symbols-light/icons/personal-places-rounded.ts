import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPersonalPlacesRoundedIcon],svg[material-symbols-light-personal-places-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19V6.039q0-.441.299-.74T8.039 5h7.103q.404 0 .762.187q.358.186.575.51l1.644 2.384q.293.429.293.919t-.293.92l-1.644 2.384q-.217.323-.575.51q-.358.186-.762.186H8v6q0 .214-.143.357T7.5 19.5t-.357-.143T7 19"></svg:path>`,
})
export class MaterialSymbolsLightPersonalPlacesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
