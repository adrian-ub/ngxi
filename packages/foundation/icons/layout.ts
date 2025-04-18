import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationLayoutIcon],svg[foundation-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.725 30.515h44.55v23.113h-44.55zm1.068 28.1h11.074v10.87H28.793zm32.122 0h11.074v10.87H60.915zm-16.061 0h11.074v10.87H44.854z"></svg:path><svg:path d="M82.69 15.588H17.31a4.513 4.513 0 0 0-4.512 4.512h-.001v60.067h.028c.14 2.366 2.085 4.246 4.485 4.246h65.38c2.401 0 4.344-1.88 4.484-4.246h.027V20.1a4.51 4.51 0 0 0-4.511-4.512m-5.428 58.885H22.738V25.527h54.525v48.946z"></svg:path></svg:g>`,
})
export class FoundationLayoutIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
