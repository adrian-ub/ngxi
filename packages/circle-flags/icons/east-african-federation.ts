import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEastAfricanFederationIcon],svg[circle-flags-east-african-federation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEastAfricanFederation0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEastAfricanFederation0)"><svg:path fill="#338af3" d="M0 0h512v141l-64 115l64 115v141H0V371l64-115L0 141Z"></svg:path><svg:path fill="#eee" d="M0 141h512v23l-256 16L0 164Z"></svg:path><svg:path fill="#333" d="M0 164h512v38l-256 16L0 202Z"></svg:path><svg:path fill="#6da544" d="m0 220l256 16l256-16v-18H0Z"></svg:path><svg:path fill="#eee" d="M0 371h512v-23l-256-16L0 348Z"></svg:path><svg:path fill="#ff9811" d="M0 348h512v-38l-256-16L0 310Z"></svg:path><svg:path fill="#6da544" d="m0 292l256-16l256 16v18H0Z"></svg:path><svg:path fill="#ffda44" d="M0 220h512v72H0z"></svg:path><svg:circle cx="256" cy="248" r="64" fill="#eee"></svg:circle><svg:path fill="#eee" d="m178 301l78-29l78 29v27H178Z"></svg:path></svg:g>`,
})
export class CircleFlagsEastAfricanFederationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
