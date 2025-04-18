import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangPaIcon],svg[circle-flags-lang-pa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangPa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangPa0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352z"></svg:path><svg:path fill="#ff9811" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#6da544" d="M0 352h512v160H0Z"></svg:path><svg:circle cx="256" cy="256" r="72" fill="#0052b4"></svg:circle><svg:circle cx="256" cy="256" r="48" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="24" fill="#0052b4"></svg:circle></svg:g>`,
})
export class CircleFlagsLangPaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
