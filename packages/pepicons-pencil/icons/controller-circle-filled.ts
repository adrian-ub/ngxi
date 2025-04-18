import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilControllerCircleFilledIcon],svg[pepicons-pencil-controller-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilControllerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M15.25 13a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M17.5 7.5h-9A4.5 4.5 0 0 0 4 12v2a4.5 4.5 0 0 0 4.5 4.5h9A4.5 4.5 0 0 0 22 14v-2a4.5 4.5 0 0 0-4.5-4.5M5 12a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 21 12v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 14a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilControllerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilControllerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
