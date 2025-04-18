import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarLimousineIcon],svg[mdi-car-limousine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1.5 1.5L1 9l1.5 1.5L1 12l1.5 1.5L1 15h14a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2l-3-4zm3.62 1.5h5.88V10H4.12l-1-1zm7.38 0h3.5l1.96 2.5H12zm6 6a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarLimousineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
