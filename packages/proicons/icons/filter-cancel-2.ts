import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFilterCancel2Icon],svg[proicons-filter-cancel-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.52 10.25l2.919-2.814a2.664 2.664 0 0 0-1.852-4.579H5.397a2.648 2.648 0 0 0-1.82 4.572l4.817 4.555c.277.262.415.393.515.548a1.5 1.5 0 0 1 .192.446c.044.178.044.369.044.75v3.976c0 1.268 0 1.902.204 2.318a2 2 0 0 0 .901.91"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-2.352-7.852a.5.5 0 0 1 .707 0l1.645 1.645l1.645-1.645a.5.5 0 1 1 .707.707L18.207 17.5l1.645 1.645a.5.5 0 0 1-.707.707L17.5 18.207l-1.645 1.645a.5.5 0 1 1-.707-.707l1.645-1.645l-1.645-1.645a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsFilterCancel2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
