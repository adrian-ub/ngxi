import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsThreeDotsLoadingIcon],svg[eos-icons-three-dots-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="6" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle>`,
})
export class EosIconsThreeDotsLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
