import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSchoolFillIcon],svg[ri-school-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 19h-1V9h-4V6.586l-6-6l-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z"></svg:path>`,
})
export class RiSchoolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
