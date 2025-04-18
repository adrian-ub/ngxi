import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolPopupIcon],svg[websymbol-popup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1091 0v636H818v364H0V364h273V0zM818 545h182V182H364v182h454zM91 909h636V545H91z"></svg:path>`,
})
export class WebsymbolPopupIcon {
  readonly viewBox = input("0 0 1091 1000")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
