import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsBubbleLoadingIcon],svg[eos-icons-bubble-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="2" r="0" fill="currentColor"><svg:animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><svg:animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><svg:animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><svg:animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><svg:animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><svg:animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><svg:animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle><svg:circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><svg:animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></svg:animate></svg:circle>`,
})
export class EosIconsBubbleLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
