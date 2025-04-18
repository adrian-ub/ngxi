import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPenCircleFilledIcon],svg[pepicons-pop-pen-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M16.198 4.22L6.12 14.298a1 1 0 0 0-.282.555l-.705 4.594a1 1 0 0 0 1.14 1.14l4.595-.705a1 1 0 0 0 .555-.281L21.501 9.523a1 1 0 0 0 0-1.414l-3.89-3.89a1 1 0 0 0-1.413 0M7.317 18.404l.448-2.924l9.14-9.14l2.475 2.476l-9.14 9.14z" clip-rule="evenodd"></svg:path><svg:path d="m14.442 8.247l1.06-1.061l3.242 3.24l-1.061 1.061z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
