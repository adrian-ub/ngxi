import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLaptopWindowsIcon],svg[ic-sharp-laptop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2zM4 5h16v10H4z"></svg:path>`,
})
export class IcSharpLaptopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
