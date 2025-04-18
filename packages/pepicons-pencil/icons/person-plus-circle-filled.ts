import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusCircleFilledIcon],svg[pepicons-pencil-person-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.95 9.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M18 13a.5.5 0 0 1-.5-.5V7.25a.5.5 0 0 1 1 0v5.25a.5.5 0 0 1-.5.5M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
