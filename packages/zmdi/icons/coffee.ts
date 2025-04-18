import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCoffeeIcon],svg[zmdi-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q18 0 30.5 12.5T427 43v64q0 17-12.5 29.5T384 149h-43v64q0 36-25 61t-60 25H128q-35 0-60-25t-25-61V0zm0 107V43h-43v64zM0 384v-43h384v43z"></svg:path>`,
})
export class ZmdiCoffeeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
