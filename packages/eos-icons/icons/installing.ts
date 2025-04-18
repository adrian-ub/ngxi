import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsInstallingIcon],svg[eos-icons-installing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h4v4H4V16z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".2" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M10 16h4v4h-4V16z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".4" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M16 16h4v4h-4V16z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".6" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M4 10h4v4H4V10z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".8" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M10 10h4v4h-4V10z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M16 10h4v4h-4V10z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.2" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M4 4h4v4H4V4z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.4" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M10 4h4v4h-4V4z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.6" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M16 4h4v4h-4V4z" class="st0"><svg:animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.8" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0"></svg:animate></svg:path>`,
})
export class EosIconsInstallingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
