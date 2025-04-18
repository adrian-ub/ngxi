import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFireExtinguisherSignIcon],svg[streamline-fire-extinguisher-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 13.5h-4a1 1 0 0 1-1-1v-5a3 3 0 0 1 6 0v5a1 1 0 0 1-1 1m-2-9v-2"></svg:path><svg:path d="M.5 6.5v-2a2 2 0 0 1 2-2h7m0 .61V1.89a.5.5 0 0 1 .379-.485l3-.75a.5.5 0 0 1 .621.485v2.72a.5.5 0 0 1-.621.485l-3-.75A.5.5 0 0 1 9.5 3.11M8.5 8h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2"></svg:path></svg:g>`,
})
export class StreamlineFireExtinguisherSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
