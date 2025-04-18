import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionTelescopeSharpIcon],svg[ion-telescope-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.41 292.9l44.82 76.97l98.14-56.38l-44.73-77.37z"></svg:path><svg:path fill="currentColor" d="m287.87 252.34l23.67-13.81l-63.42-110l-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25l23.24-13.4L358 464h36ZM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151L424.07 1.41Z"></svg:path>`,
})
export class IonTelescopeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
