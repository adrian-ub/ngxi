import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiDiamondshapewithdotinsideIcon],svg[fxemoji-diamondshapewithdotinside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#59CAFC" d="M245.818 231.747L142.945 128.874c-5.624-5.624-5.624-14.741 0-20.365L245.818 5.637c5.624-5.624 14.741-5.624 20.365 0L369.055 108.51c5.624 5.624 5.624 14.741 0 20.365L266.182 231.747c-5.623 5.623-14.741 5.623-20.364 0m20.364 274.616L369.055 403.49c5.624-5.624 5.624-14.741 0-20.365L266.182 280.253c-5.624-5.624-14.741-5.624-20.365 0L142.945 383.126c-5.624 5.624-5.624 14.741 0 20.365l102.873 102.873c5.623 5.623 14.741 5.623 20.364-.001m14.071-241.724l102.873 102.873c5.624 5.624 14.741 5.624 20.365 0l102.873-102.873c5.624-5.624 5.624-14.741 0-20.365L403.49 141.402c-5.624-5.624-14.741-5.624-20.365 0L280.253 244.275c-5.623 5.623-5.623 14.741 0 20.364m-274.616 0L108.51 367.512c5.624 5.624 14.741 5.624 20.365 0l102.873-102.873c5.624-5.624 5.624-14.741 0-20.365L128.874 141.402c-5.624-5.624-14.741-5.624-20.365 0L5.637 244.275c-5.624 5.623-5.624 14.741 0 20.364"></svg:path><svg:circle cx="253.538" cy="256" r="52.235" fill="#0096D1"></svg:circle>`,
})
export class FxemojiDiamondshapewithdotinsideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
