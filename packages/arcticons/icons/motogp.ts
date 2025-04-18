import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotogpIcon],svg[arcticons-motogp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.773 19.413h4.636c1.707 0 3.091 1.37 3.091 3.058s-1.384 3.058-3.09 3.058h-2.32v3.058h-6.954c-2.561 0-4.637-2.054-4.637-4.587s2.076-4.587 4.637-4.587zv9.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.409 22.471h-9.273c-.853 0-1.545.685-1.545 1.53s.691 1.528 1.545 1.528h2.318M4.5 28.587l10.818-9.174v9.174l9.182-9.174v9.174"></svg:path>`,
})
export class ArcticonsMotogpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
