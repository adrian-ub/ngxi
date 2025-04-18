import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifPaIcon],svg[cif-pa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#005293" d="M.5 100.5h150v100H.5z"></svg:path><svg:path fill="#D21034" d="M150.5.5h150v100h-150z"></svg:path><svg:path fill="#005293" d="m51.724 42.774l14.694 10.677l-5.612 17.275L75.5 60.049l14.695 10.677l-5.613-17.275l14.694-10.677H81.113L75.5 25.5l-5.613 17.274z"></svg:path><svg:path fill="#D21034" d="m201.724 142.775l14.694 10.676l-5.612 17.274L225.5 160.05l14.694 10.675l-5.613-17.274l14.695-10.676h-18.163L225.5 125.5l-5.613 17.275z"></svg:path></svg:g>`,
})
export class CifPaIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
