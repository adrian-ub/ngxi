import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLibraryIcon],svg[zondicons-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6l10-6l10 6v2H0zm0 12h20v2H0zm2-2h16v2H2zm0-8h4v8H2zm6 0h4v8H8zm6 0h4v8h-4z"></svg:path>`,
})
export class ZondiconsLibraryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
