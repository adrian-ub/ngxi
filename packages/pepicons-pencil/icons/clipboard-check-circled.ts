import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilClipboardCheckCircledIcon],svg[pepicons-pencil-clipboard-check-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.175 2.5a.5.5 0 0 1 .5-.5h6.643a.5.5 0 0 1 .5.5v3.875a.5.5 0 0 1-.5.5H6.675a.5.5 0 0 1-.5-.5zm1 .5v2.875h5.643V3z"></svg:path><svg:path d="M4.5 17V5h2V4h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7.854a4 4 0 0 1-.819-1zm11-5.97q.526.069 1 .26V5a1 1 0 0 0-1-1h-2v1h2z"></svg:path><svg:path d="M15 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M16.582 13.882a.5.5 0 0 1 .078.703l-1.106 1.382a1 1 0 0 1-1.488.082l-.696-.695a.5.5 0 0 1 .708-.707l.696.695l1.105-1.382a.5.5 0 0 1 .703-.078"></svg:path></svg:g>`,
})
export class PepiconsPencilClipboardCheckCircledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
