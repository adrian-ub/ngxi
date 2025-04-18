import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFriendfeedIcon],svg[ps-friendfeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 81h-68q-10 0-19 12.5t-9 29.5v40h81v81h-81v203h-81V244H163v203H83V244H2v-81h81v-40q0-50 31.5-86T192 1h68v80h-68q-11 0-20 12.5t-9 29.5v40h122v-40q0-50 32-86t77-36h68z"></svg:path>`,
})
export class PsFriendfeedIcon {
  readonly viewBox = input("0 0 464 480")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
