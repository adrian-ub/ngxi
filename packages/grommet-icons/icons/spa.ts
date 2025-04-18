import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSpaIcon],svg[grommet-icons-spa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c1.5 0 4-1 4-5.5S12 6 12 6s-4 6-4 10.5s2.5 5.5 4 5.5Zm0 0c-1.5 0-2.953-.22-5-1.5C3 18 2.5 10 2.5 10s4.5.5 6.5 2m3 10c1.5 0 2.953-.22 5-1.5C21 18 21.5 10 21.5 10s-4.5.5-6.5 2"></svg:path>`,
})
export class GrommetIconsSpaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
