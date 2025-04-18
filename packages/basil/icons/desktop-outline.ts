import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilDesktopOutlineIcon],svg[basil-desktop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3.75l7.274.205a2.584 2.584 0 0 1 2.494 2.29a37.4 37.4 0 0 1 0 8.51a2.584 2.584 0 0 1-2.494 2.29l-5.524.156v2.05H17a.75.75 0 1 1 0 1.5H7a.75.75 0 0 1 0-1.5h3.25V17.2l-5.524-.156a2.584 2.584 0 0 1-2.494-2.29a37.4 37.4 0 0 1 0-8.51a2.584 2.584 0 0 1 2.494-2.29zm0 1.5l-7.231.205c-.54.015-.985.424-1.047.96a36 36 0 0 0 0 8.17c.062.536.507.945 1.047.96l7.23.205l7.232-.205c.54-.015.985-.424 1.047-.96a36 36 0 0 0 0-8.17a1.084 1.084 0 0 0-1.047-.96z" clip-rule="evenodd"></svg:path>`,
})
export class BasilDesktopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
