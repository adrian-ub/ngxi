import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCoderwallIcon],svg[logos-coderwall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3E8DCC"><svg:circle cx="28.823" cy="28.823" r="28.051"></svg:circle><svg:circle cx="128" cy="28.823" r="28.051"></svg:circle><svg:circle cx="227.177" cy="28.823" r="28.051"></svg:circle><svg:circle cx="128" cy="128" r="28.051"></svg:circle><svg:circle cx="227.177" cy="128" r="28.051"></svg:circle><svg:circle cx="227.177" cy="227.177" r="28.051"></svg:circle></svg:g>`,
})
export class LogosCoderwallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
