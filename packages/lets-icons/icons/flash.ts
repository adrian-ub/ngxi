import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlashIcon],svg[lets-icons-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 19H5m2 0l.836-6.686A1.5 1.5 0 0 1 9.324 11h5.352a1.5 1.5 0 0 1 1.488 1.314L17 19M12 4v3m8.5 2L18 10M3.5 9L6 10m11.5-4.5l-1.5 2m-9.5-2l1.5 2m4 6.5h1.5"></svg:path>`,
})
export class LetsIconsFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
