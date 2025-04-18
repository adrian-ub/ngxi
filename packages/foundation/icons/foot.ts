import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationFootIcon],svg[foundation-foot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="28.549" cy="35.885" r="4.342" fill="currentColor"></svg:circle><svg:circle cx="65.794" cy="15.531" r="8.767" fill="currentColor"></svg:circle><svg:circle cx="47.712" cy="18.329" r="5.469" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M72.903 74.043a14.56 14.56 0 0 1-.51-14.513l-.034-.051a20.4 20.4 0 0 0 3.436-11.356c0-11.326-9.182-20.507-20.507-20.507s-20.507 9.181-20.507 20.507c0 2.212.36 4.338 1.009 6.335a17.8 17.8 0 0 0 2.068 5.011l-.096.055l14.854 25.729c1.568 4.64 5.947 7.984 11.115 7.984c6.484 0 11.743-5.256 11.743-11.741c0-2.813-.992-5.394-2.643-7.416z"></svg:path><svg:circle cx="36.161" cy="26.693" r="4.342" fill="currentColor"></svg:circle>`,
})
export class FoundationFootIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
