import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPackageBoxCloseIcon],svg[lets-icons-package-box-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M12 8V4m-1 12H8m-2.5 4h13a1.5 1.5 0 0 0 1.5-1.5V8.236a1 1 0 0 0-.106-.447l-1.341-2.683A2 2 0 0 0 16.763 4H7.237a2 2 0 0 0-1.789 1.106L4.106 7.789A1 1 0 0 0 4 8.236V18.5A1.5 1.5 0 0 0 5.5 20Z"></svg:path><svg:path stroke-linejoin="round" d="M5 8h14"></svg:path></svg:g>`,
})
export class LetsIconsPackageBoxCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
