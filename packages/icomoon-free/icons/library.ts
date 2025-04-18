import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeLibraryIcon],svg[icomoon-free-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15v-1h-1V8h1V7h-3v1h1v6h-3V8h1V7H9v1h1v6H7V8h1V7H5v1h1v6H3V8h1V7H1v1h1v6H1v1H0v1h17v-1zM8 0h1l8 5v1H0V5z"></svg:path>`,
})
export class IcomoonFreeLibraryIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
