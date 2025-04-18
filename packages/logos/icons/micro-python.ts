import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMicroPythonIcon],svg[logos-micro-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 0h122.76v199.86h10.48V0H256v256h-56.14V56.14h-10.48V256H66.62V56.14l-10.48.375V256H0zm237.287 208.094h-14.971v25.45h14.97z"></svg:path>`,
})
export class LogosMicroPythonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
