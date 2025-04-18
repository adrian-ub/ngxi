import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignYieldIcon],svg[mdi-sign-yield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 3h-17C2.4 3 1.6 4.3 2.2 5.3l8.5 14.9c.3.5.8.8 1.3.8s1-.3 1.3-.8l8.5-14.9c.6-1-.2-2.3-1.3-2.3M12 18.5L4.3 5h15.3zm-5.1-12h10.2l-5.1 9z"></svg:path>`,
})
export class MdiSignYieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
