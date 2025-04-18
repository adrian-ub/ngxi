import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMgIcon],svg[circle-flags-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMg0)"><svg:path fill="#eee" d="M0 0h167l45.6 257.6L167.1 512H0z"></svg:path><svg:path fill="#d80027" d="M167 0h345v256l-176.7 53.5L166.9 256z"></svg:path><svg:path fill="#6da544" d="M167 256h345v256H167z"></svg:path></svg:g>`,
})
export class CircleFlagsMgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
