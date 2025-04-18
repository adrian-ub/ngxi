import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGwIcon],svg[cif-gw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h100v150H.5z"></svg:path><svg:path fill="#FCD116" d="M100.5.5h200v75h-200z"></svg:path><svg:path fill="#009E49" d="M100.5 75.5h200v75h-200z"></svg:path><svg:path fill="#000" d="m26.724 67.774l14.694 10.677l-5.612 17.274L50.5 85.049l14.695 10.676l-5.613-17.274l14.695-10.677H56.113L50.5 50.5l-5.613 17.274z"></svg:path></svg:g>`,
})
export class CifGwIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
