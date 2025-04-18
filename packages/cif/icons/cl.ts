import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifClIcon],svg[cif-cl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D52B1E" d="M300.5 200.5H.5V.5h300z"></svg:path><svg:path fill="#FFF" d="M100.5 100.5h200V.5H.5z"></svg:path><svg:path fill="#0039A6" d="M100.5 100.5H.5V.5h100z"></svg:path><svg:path fill="#FFF" d="m26.724 42.774l14.694 10.677l-5.612 17.274L50.5 60.049l14.695 10.676l-5.613-17.274l14.695-10.677H56.113L50.5 25.5l-5.613 17.274z"></svg:path></svg:g>`,
})
export class CifClIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
