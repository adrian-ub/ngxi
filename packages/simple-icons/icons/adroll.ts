import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAdrollIcon],svg[simple-icons-adroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12c0-6.01-4.727-10.886-10.886-10.886a10.86 10.86 0 0 0-9.508 5.578L8.914 12c0-2.323 1.958-4.2 4.2-4.2c2.377 0 4.2 1.877 4.2 4.2s-1.836 4.2-4.2 4.2H4.065A4.07 4.07 0 0 0 0 20.266v2.62h13.114C19.232 22.886 24 18.01 24 12"></svg:path>`,
})
export class SimpleIconsAdrollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
