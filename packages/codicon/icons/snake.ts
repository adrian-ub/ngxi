import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSnakeIcon],svg[codicon-snake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path fill-rule="evenodd" d="M5.5 1a2.5 2.5 0 0 0-2.086 3.879L2.293 6H.5v1H2v1.5h1V6.707l1.121-1.121c.396.262.87.414 1.379.414H7v2H6a2 2 0 0 0-2 2a2 2 0 1 0 0 4h9a2 2 0 1 0 0-4a2 2 0 0 0-2-2V4.5A3.5 3.5 0 0 0 7.5 1zM4 3.5A1.5 1.5 0 0 1 5.5 2h2A2.5 2.5 0 0 1 10 4.5v4l.5.5h.5a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1h1.5l.5-.5v-3L7.5 5h-2A1.5 1.5 0 0 1 4 3.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconSnakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
