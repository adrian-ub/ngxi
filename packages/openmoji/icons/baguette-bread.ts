import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBaguetteBreadIcon],svg[openmoji-baguette-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="M11.93 45.93c-3.904 3.904-3.906 10.236 0 14.141c3.905 3.906 10.239 3.906 14.143.001l34-34c3.904-3.907 3.904-10.238 0-14.142c-3.907-3.907-10.238-3.907-14.143-.001z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11.93 45.93c-3.904 3.904-3.906 10.236 0 14.141c3.905 3.906 10.239 3.906 14.143.001l34-34c3.904-3.907 3.904-10.238 0-14.142c-3.907-3.907-10.238-3.907-14.143-.001z"></svg:path><svg:path d="M45.93 11.929c-3.905 3.905-3.905 10.237 0 14.142m-8.5-5.642c-3.905 3.905-3.905 10.237 0 14.142m-8.5-5.642c-3.904 3.906-3.904 10.238 0 14.142m-8.5-5.641c-3.904 3.905-3.904 10.237 0 14.142"></svg:path></svg:g>`,
})
export class OpenmojiBaguetteBreadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
