import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeGlobeIcon],svg[prime-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9a9 9 0 0 0-9-9m7.46 8.25H16.7a13 13 0 0 0-2.94-6.53a7.52 7.52 0 0 1 5.7 6.53m-10.65 1.5h6.38A13.2 13.2 0 0 1 12 19.1a13.2 13.2 0 0 1-3.19-6.35m0-1.5A13.2 13.2 0 0 1 12 4.9a13.2 13.2 0 0 1 3.19 6.35Zm1.43-6.53a13 13 0 0 0-2.94 6.53H4.54a7.52 7.52 0 0 1 5.7-6.53m-5.7 8H7.3a13 13 0 0 0 2.94 6.53a7.52 7.52 0 0 1-5.7-6.5Zm9.22 6.53a13 13 0 0 0 2.94-6.53h2.76a7.52 7.52 0 0 1-5.7 6.56Z"></svg:path>`,
})
export class PrimeGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
