import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluid24RegularIcon],svg[fluent-fluid-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h5.745a2.25 2.25 0 0 1 2.25 2.25V11h-1.5V7.25a.75.75 0 0 0-.75-.75H11zm-4.5 6v5.745c0 .414.336.75.75.75H11v1.5H7.25A2.25 2.25 0 0 1 5 16.745V11zM2 4.25A2.25 2.25 0 0 1 4.25 2h3.5A2.25 2.25 0 0 1 10 4.25v3.5A2.25 2.25 0 0 1 7.75 10h-3.5A2.25 2.25 0 0 1 2 7.75zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zM12 14.25A2.25 2.25 0 0 1 14.25 12h5.5A2.25 2.25 0 0 1 22 14.25v5.5A2.25 2.25 0 0 1 19.75 22h-5.5A2.25 2.25 0 0 1 12 19.75zm2.25-.75a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentFluid24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
