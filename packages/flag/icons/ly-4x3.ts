import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLy4x3Icon],svg[flag-ly-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagLy4x30"><svg:path d="M166.7-20h666.6v500H166.7z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagLy4x30)" transform="matrix(.96 0 0 .96 -160 19.2)"><svg:path fill="#239e46" d="M0-20h1000v500H0z"></svg:path><svg:path fill="#000001" d="M0-20h1000v375H0z"></svg:path><svg:path fill="#e70013" d="M0-20h1000v125H0z"></svg:path><svg:path fill="#fff" d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4a62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3l-52 71.5v-88.4l52 71.5z"></svg:path></svg:g>`,
})
export class FlagLy4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
