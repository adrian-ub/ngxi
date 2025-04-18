import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLockOpenIcon],svg[la-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7M8 15h16v12H8z"></svg:path>`,
})
export class LaLockOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
