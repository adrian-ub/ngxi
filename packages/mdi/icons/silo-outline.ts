import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSiloOutlineIcon],svg[mdi-silo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a6.5 6.5 0 0 1 6.46 5.78L22 12v2l-2-1.2V22h-2V11.6l-3-1.8V22h-2V9H4v13H2V8.5A6.5 6.5 0 0 1 8.5 2m0 2C6.54 4 4.87 5.25 4.26 7h8.48c-.61-1.75-2.28-3-4.24-3M6 11h5v2H6zm0 4h5v2H6zm0 4h5v2H6z"></svg:path>`,
})
export class MdiSiloOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
