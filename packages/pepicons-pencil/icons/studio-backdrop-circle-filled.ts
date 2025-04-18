import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilStudioBackdropCircleFilledIcon],svg[pepicons-pencil-studio-backdrop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilStudioBackdropCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zm12 0h-11v7h11z"></svg:path><svg:path d="M5.25 5.5a.5.5 0 0 1 .5-.5h14.5a.5.5 0 0 1 0 1H5.75a.5.5 0 0 1-.5-.5m2.24 7.598L6.11 20h13.78l-1.38-6.902l.98-.196l1.38 6.902A1 1 0 0 1 19.89 21H6.11a1 1 0 0 1-.98-1.196l1.38-6.902z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilStudioBackdropCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilStudioBackdropCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
