import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilEyeCircleFilledIcon],svg[pepicons-pencil-eye-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilEyeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 19c4.658 0 8.5-2.161 8.5-5S17.658 9 13 9s-8.5 2.161-8.5 5s3.842 5 8.5 5m0-9c4.179 0 7.5 1.868 7.5 4s-3.321 4-7.5 4s-7.5-1.868-7.5-4s3.321-4 7.5-4" clip-rule="evenodd"></svg:path><svg:path d="M12.5 6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0zm4.01.402a.5.5 0 0 1 .98.196l-.5 2.5a.5.5 0 0 1-.98-.196zm-7.02 0a.5.5 0 0 0-.98.196l.5 2.5a.5.5 0 0 0 .98-.196zM5.429 8.243a.5.5 0 0 0-.858.514l1.5 2.5a.5.5 0 0 0 .858-.514zm15.142 0a.5.5 0 1 1 .858.514l-1.5 2.5a.5.5 0 1 1-.858-.514zM16 13.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilEyeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilEyeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
