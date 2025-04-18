import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtSnIcon],svg[circle-flags-et-sn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtSn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtSn0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#d80027" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#ff9811" d="m256 188l-72 88v48h144v-48z"></svg:path></svg:g>`,
})
export class CircleFlagsEtSnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
