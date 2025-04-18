import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaAlertIcon],svg[iwwa-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.765 35.729H4.24a2.1 2.1 0 0 1-1.806-1.039a2.07 2.07 0 0 1-.006-2.085L18.2 5.312a2.07 2.07 0 0 1 1.801-1.041c.743 0 1.435.399 1.805 1.042l15.729 27.224a2.087 2.087 0 0 1-1.77 3.192M19.948 6.312h-.017L4.162 33.601l.078.129h31.525c.044 0 .087-.043.087-.086c-.007-.011-.042-.096-.049-.107L20.073 6.312z"></svg:path><svg:path fill="currentColor" d="M19.029 15.549v8.701a1.136 1.136 0 0 0 2.27 0v-8.701a1.14 1.14 0 0 0-1.135-1.139c-.623 0-1.135.513-1.135 1.139m1.136 11.35c-.624 0-1.135.506-1.135 1.132v.761a1.14 1.14 0 0 0 1.135 1.132c.626 0 1.135-.513 1.135-1.132v-.761c0-.626-.51-1.132-1.135-1.132m0 0"></svg:path>`,
})
export class IwwaAlertIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
