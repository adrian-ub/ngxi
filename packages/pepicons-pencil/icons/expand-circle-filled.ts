import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilExpandCircleFilledIcon],svg[pepicons-pencil-expand-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilExpandCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.354 12.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708zm-6 6a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M8 18.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M8.5 18a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0zm10-6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M14 8.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilExpandCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilExpandCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
