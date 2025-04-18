import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogoWikidataIcon],svg[ooui-logo-wikidata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4v12.258h.742V4zm1.482 0v12.258h2.223V4zm2.96 0v12.258H6.67V4zm2.964 0v12.258h.744V4zm1.48 0v12.258h.745V4zm1.483 0v12.258h2.224V4zm2.962 0v12.258h.742V4zm1.482 0v12.258h2.223V4zm2.96 0v12.258h.744V4zm1.484 0v12.258H20V4z"></svg:path>`,
})
export class OouiLogoWikidataIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
