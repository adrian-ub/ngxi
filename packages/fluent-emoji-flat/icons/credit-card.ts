import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCreditCardIcon],svg[fluent-emoji-flat-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M27.752 30H4.248A2.25 2.25 0 0 1 2 27.751V14.25A2.25 2.25 0 0 1 4.248 12h23.504A2.25 2.25 0 0 1 30 14.249V27.75A2.245 2.245 0 0 1 27.752 30"></svg:path><svg:path fill="#F4F4F4" d="M23.386 24H5.614A.617.617 0 0 1 5 23.384v-2.768c0-.333.272-.616.614-.616h17.772c.332 0 .614.273.614.616v2.778a.61.61 0 0 1-.614.606"></svg:path><svg:path fill="#FFF478" d="M25.353 28h1.794a.85.85 0 0 0 .853-.853v-1.794a.85.85 0 0 0-.853-.853h-1.794a.85.85 0 0 0-.853.853v1.794a.86.86 0 0 0 .853.853"></svg:path><svg:path fill="#321B41" d="M30 15H2v3h28z"></svg:path><svg:path fill="#9B9B9B" d="M6 22a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 6 22"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCreditCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
