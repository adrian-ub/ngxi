import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGitterIcon],svg[logos-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosGitter0" x1="50%" x2="50%" y1="0%" y2="100%"><svg:stop offset="0%" stop-color="#FB0766"></svg:stop><svg:stop offset="100%" stop-color="#C50948"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosGitter0)" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="M83.914 62.873h12.525v82.661H83.914zm76.149 20.039h12.524v62.622h-12.524zm-50.599 0h12.524v110.466h-12.524zm25.049 0h12.525v110.466h-12.525z"></svg:path>`,
})
export class LogosGitterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
