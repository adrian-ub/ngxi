import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTrIcon],svg[circle-flags-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTr0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:g fill="#eee"><svg:path d="m350 182l33 46l54-18l-33 46l33 46l-54-18l-33 46v-57l-54-17l54-18z"></svg:path><svg:path d="M260 370a114 114 0 1 1 54-215a141 141 0 1 0 0 202c-17 9-35 13-54 13"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsTrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
