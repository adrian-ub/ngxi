import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogoWikimediaIcon],svg[ooui-logo-wikimedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.08 5.555a6.048 6.048 0 0 0 3.055 10.593v-7.54L6.08 5.556zm7.828.004l-3.05 3.05v7.536a6.048 6.048 0 0 0 3.05-10.587z"></svg:path><svg:path fill="currentColor" d="M3.414 2.89C1.424 4.69.164 7.287.168 10.173c.007 5.406 4.42 9.806 9.828 9.806s9.82-4.4 9.828-9.806c.004-2.886-1.255-5.482-3.246-7.285L14.865 4.6a7.36 7.36 0 0 1 2.524 5.568c-.007 4.09-3.3 7.375-7.394 7.375S2.61 14.26 2.604 10.17a7.36 7.36 0 0 1 2.523-5.568z"></svg:path><svg:circle cx="10" cy="3.32" r="3.32" fill="currentColor"></svg:circle>`,
})
export class OouiLogoWikimediaIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
