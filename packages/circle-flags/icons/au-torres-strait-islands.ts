import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAuTorresStraitIslandsIcon],svg[circle-flags-au-torres-strait-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAuTorresStraitIslands0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAuTorresStraitIslands0)"><svg:path fill="#0052b4" d="m0 128l256-32l256 32v256l-256 32L0 384Z"></svg:path><svg:path fill="#333" d="m0 96l256-32l256 32v32H0Z"></svg:path><svg:path fill="#6da544" d="M0 0h512v96H0Z"></svg:path><svg:path fill="#333" d="m0 416l256 32l256-32v-32H0Z"></svg:path><svg:path fill="#6da544" d="M0 512h512v-96H0Z"></svg:path><svg:path fill="#eee" d="M245 144c-106 32-101 112-67 186l-40 38l73-27v-98c24-35 66-35 90 0v98l73 27l-40-38c34-74 39-154-67-186l-11 46zm11 83l-9 27h-28l23 17l-9 28l23-17l23 17l-9-28l24-17h-29z"></svg:path></svg:g>`,
})
export class CircleFlagsAuTorresStraitIslandsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
