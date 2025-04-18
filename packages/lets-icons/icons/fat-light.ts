import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFatLightIcon],svg[lets-icons-fat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="m15 12l.626-.737c.849-.998 2.478-.305 2.348.999c-.141 1.408 1.719 2.04 2.465.836L20.5 13M9 12l-.177 1.006c-.28 1.587-2.546 1.622-2.875.044l-.171-.822C5.537 11.079 3.962 10.922 3.5 12"></svg:path><svg:circle cx="9.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="16.5" cy="8.5" r=".5"></svg:circle><svg:circle cx="13.5" cy="5.5" r=".5"></svg:circle></svg:g>`,
})
export class LetsIconsFatLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
