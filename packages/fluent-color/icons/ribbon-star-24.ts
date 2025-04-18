import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorRibbonStar24Icon],svg[fluent-color-ribbon-star-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorRibbonStar240)" d="M17.002 13.244v8.001a.75.75 0 0 1-1.183.613l-3.818-2.687l-3.816 2.687a.75.75 0 0 1-1.182-.613l-.002-8a7.97 7.97 0 0 0 5 1.755a7.97 7.97 0 0 0 5-1.756"></svg:path><svg:path fill="url(#fluentColorRibbonStar241)" d="M12 2a7 7 0 1 1 0 14a7 7 0 0 1 0-14"></svg:path><svg:path fill="url(#fluentColorRibbonStar242)" d="m12.229 5.642l.912 1.853l2.044.295c.21.03.293.288.142.435l-1.479 1.44l.35 2.036a.255.255 0 0 1-.371.269L12 11.008l-1.827.962a.255.255 0 0 1-.37-.269l.35-2.035l-1.48-1.44a.255.255 0 0 1 .142-.436l2.043-.295l.913-1.853a.255.255 0 0 1 .458 0"></svg:path><svg:defs><svg:radialgradient id="fluentColorRibbonStar240" cx="0" cy="0" r="1" gradientTransform="matrix(0 13.7943 -22.0759 0 12.001 11.88)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar241" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 31.006 -46.94)scale(78.1445 66.9271)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar242" cx="0" cy="0" r="1" gradientTransform="matrix(-3.404 -11.37499 16.41103 -4.91106 13.702 12)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B03111"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorRibbonStar24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
