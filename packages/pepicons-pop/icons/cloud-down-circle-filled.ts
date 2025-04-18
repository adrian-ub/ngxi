import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownCircleFilledIcon],svg[pepicons-pop-cloud-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCloudDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 13a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M15.375 17.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M10.375 19.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCloudDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCloudDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
