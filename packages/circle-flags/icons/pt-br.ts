import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPtBrIcon],svg[circle-flags-pt-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPtBr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPtBr0)"><svg:path fill="#6da544" d="M512 0v512H0l224-288Z"></svg:path><svg:path fill="#ffda44" d="m346 166l-122 58l-58 122l90 66l212-156Z"></svg:path><svg:path fill="#0052b4" d="m319 193l-95 31l-31 95a89 89 0 0 0 136-12l14-34a89 89 0 0 0-24-80"></svg:path><svg:path fill="#eee" d="M255 257c29 9 55 26 74 50c7-10 12-22 14-34c-17-18-38-32-62-42l-57-7Z"></svg:path><svg:path fill="#fff" d="M0 512L512 0H0Z"></svg:path><svg:path fill="#496e2d" d="M0 0v512l167-167l32-172L167 0Z"></svg:path><svg:path fill="#d80027" d="M167 0v167l89 89L512 0Z"></svg:path><svg:path fill="#ffda44" d="M167 167a89 89 0 0 0-89 89a89 89 0 0 0 89 89l89-89a89 89 0 0 0-89-89"></svg:path><svg:path fill="#d80027" d="M117 212v55a50 50 0 1 0 100 0v-56H117Z"></svg:path><svg:path fill="#eee" d="M167 284c-9 0-17-8-17-17v-22h34v22c0 9-8 17-17 17"></svg:path></svg:g>`,
})
export class CircleFlagsPtBrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
