import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFireLinearIcon],svg[solar-fire-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 13.111C20 20.222 13.956 22 10.933 22C8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716c.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"></svg:path></svg:g>`,
})
export class SolarFireLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
