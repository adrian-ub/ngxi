import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOkHandIcon],svg[streamline-ok-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.956 13.309a3.8 3.8 0 0 0 1.31-.696c.538-.44.928-.999 1.158-1.61a1.27 1.27 0 0 0-1.31-1.712c.184-.042.36-.126.516-.253c.544-.443.586-1.452.143-1.996a3.8 3.8 0 0 0-3.17-1.398l1.32-3.027A1.415 1.415 0 0 0 8.172.745v0a1.35 1.35 0 0 0-1.648.479c-.991 1.482-2.814 4.488-2.927 6.7c-.157 3.05 0 5.385 0 5.385"></svg:path><svg:path d="M7.16 8.64a1.27 1.27 0 1 0 1.992 1.435a1.27 1.27 0 0 1 .904-.79a1.27 1.27 0 0 1-1.108-.463a1.27 1.27 0 0 0-1.787-.182Z" clip-rule="evenodd"></svg:path><svg:path d="M7.612 5.646c-.256.03-.864.143-1.25.353m-2.822 3c-.895-2.001-.855-5.288-.76-6.99A1.35 1.35 0 0 1 3.955.76a1.415 1.415 0 0 1 1.6 1.228v.799"></svg:path></svg:g>`,
})
export class StreamlineOkHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
