import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuCircleFilledIcon],svg[pepicons-pencil-menu-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMenuCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMenuCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMenuCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
