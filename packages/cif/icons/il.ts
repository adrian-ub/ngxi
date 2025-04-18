import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifIlIcon],svg[cif-il-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.409h300v218.182H.5z"></svg:path><svg:path fill="#0038B8" d="M.5 20.863h300v34.091H.5zm0 143.182h300v34.091H.5z"></svg:path><svg:path stroke="#0038B8" stroke-width="6.364" d="m150.5 149.237l34.414-59.606h-68.828z"></svg:path><svg:path stroke="#0038B8" stroke-width="6.364" d="m150.5 69.762l-34.414 59.607h68.828z"></svg:path></svg:g>`,
})
export class CifIlIcon {
  readonly viewBox = input("0 0 301 219")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
