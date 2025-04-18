import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSeedIcon],svg[mdi-seed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 3.3S19.3 3 17.2 3c-5.5 0-15.6 2.1-14 17.8c1.1.1 2.2.2 3.2.2C24.3 21 20.7 3.3 20.7 3.3M7 17S7 7 17 7c0 0-6 2-10 10"></svg:path>`,
})
export class MdiSeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
