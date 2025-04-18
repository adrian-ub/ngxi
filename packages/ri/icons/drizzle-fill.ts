import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDrizzleFillIcon],svg[ri-drizzle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18v3H9v-3a8 8 0 1 1 7.458-10.901A5.5 5.5 0 1 1 17.5 18zm2 2h2v3h-2z"></svg:path>`,
})
export class RiDrizzleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
