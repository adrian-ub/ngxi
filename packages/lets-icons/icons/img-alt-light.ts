import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImgAltLightIcon],svg[lets-icons-img-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="18" cy="7" r="1.5"></svg:circle><svg:path d="M5.037 17.5h10.927a.8.8 0 0 0 .655-1.259l-5.464-7.805a.8.8 0 0 0-1.31 0L4.38 16.241a.8.8 0 0 0 .656 1.259Z"></svg:path><svg:path d="M10.5 17.5h8.557a.8.8 0 0 0 .678-1.224l-3.557-5.69a.8.8 0 0 0-1.356 0l-.963 1.539"></svg:path></svg:g>`,
})
export class LetsIconsImgAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
