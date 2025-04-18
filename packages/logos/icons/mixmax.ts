import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMixmaxIcon],svg[logos-mixmax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E55CFF" d="M0 202.999h50.731V.007H0z"></svg:path><svg:path fill="#24235C" d="M102.633.007L0 202.999h50.731L153.364.007z"></svg:path><svg:path fill="#E55CFF" d="M102.633 202.999h50.731V.007h-50.731z"></svg:path><svg:path fill="#24235C" d="M205.27.008L102.635 203h50.73L256 .008z"></svg:path><svg:path fill="#E55CFF" d="M204.982 202.999h50.731V.007h-50.731z"></svg:path>`,
})
export class LogosMixmaxIcon {
  readonly viewBox = input("0 0 256 203")
  readonly width = input("1.27em")
  readonly height = input("1em")
}
