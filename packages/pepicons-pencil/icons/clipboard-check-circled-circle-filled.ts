import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilClipboardCheckCircledCircleFilledIcon],svg[pepicons-pencil-clipboard-check-circled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilClipboardCheckCircledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.175 5.5a.5.5 0 0 1 .5-.5h6.643a.5.5 0 0 1 .5.5v3.875a.5.5 0 0 1-.5.5H9.675a.5.5 0 0 1-.5-.5zm1 .5v2.875h5.643V6z"></svg:path><svg:path d="M7.5 20V8h2V7h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7.854a4 4 0 0 1-.819-1zm11-5.97q.526.069 1 .26V8a1 1 0 0 0-1-1h-2v1h2z"></svg:path><svg:path d="M18 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M19.582 16.882a.5.5 0 0 1 .078.703l-1.106 1.382a1 1 0 0 1-1.488.082l-.695-.695a.5.5 0 0 1 .707-.707l.695.695l1.106-1.382a.5.5 0 0 1 .703-.078"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilClipboardCheckCircledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilClipboardCheckCircledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
