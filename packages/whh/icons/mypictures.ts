import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMypicturesIcon],svg[whh-mypictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84v576q0 53-37.5 90.5t-90.5 37.5m-64-576h-640v394l91-92q15-15 37.5-15t37.5 15l145 146h64l-86-87l154-155q15-15 37.5-15t36.5 15l123 123zm-416 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-370-532q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhMypicturesIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
