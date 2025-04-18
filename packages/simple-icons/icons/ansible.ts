import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAnsibleIcon],svg[simple-icons-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.617 11.473l4.686 3.695l-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12s12-5.371 12-12S18.629 0 12 0m5.797 17.305a.85.85 0 0 1-.875.83c-.236 0-.416-.09-.664-.293l-6.19-5l-2.079 5.203H6.191L11.438 5.44a.79.79 0 0 1 .764-.506a.76.76 0 0 1 .742.506l4.774 11.494c.045.111.08.234.08.348z"></svg:path>`,
})
export class SimpleIconsAnsibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
