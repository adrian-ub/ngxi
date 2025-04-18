import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLy1x1Icon],svg[flag-ly-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagLy1x10"><svg:path d="M250 12h500v500H250z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagLy1x10)" transform="translate(-256 -12.3)scale(1.024)"><svg:path fill="#239e46" d="M0 12h1000v500H0z"></svg:path><svg:path fill="#000001" d="M0 12h1000v375H0z"></svg:path><svg:path fill="#e70013" d="M0 12h1000v125H0z"></svg:path><svg:path fill="#fff" d="M544.2 217.8a54.3 54.3 0 1 0 0 88.4a62.5 62.5 0 1 1 0-88.4M530.4 262l84.1-27.3l-52 71.5v-88.4l52 71.5z"></svg:path></svg:g>`,
})
export class FlagLy1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
