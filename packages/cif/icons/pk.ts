import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifPkIcon],svg[cif-pk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#01411C" d="M75.5.5h225v200h-225z"></svg:path><svg:circle cx="188" cy="100.5" r="60" fill="#FFF"></svg:circle><svg:circle cx="203.337" cy="86.868" r="55" fill="#01411C"></svg:circle><svg:path fill="#FFF" d="m209.879 55.603l25.274 28.433l-37.16-8.147l34.852-15.251l-19.232 32.824z"></svg:path></svg:g>`,
})
export class CifPkIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
