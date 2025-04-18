import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosManjaroIcon],svg[logos-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#35BF5C" d="M256 0v256h-74.925V0zm-90.54 90.536V256H90.535V90.536zm0-90.536v74.925H74.67V256H0V0z"></svg:path>`,
})
export class LogosManjaroIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
