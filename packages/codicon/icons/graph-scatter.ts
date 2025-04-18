import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGraphScatterIcon],svg[codicon-graph-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 13v1H1.5l-.5-.5V0h1v13z"></svg:path><svg:path d="M5 2h2v2H5zm7-1h2v2h-2zM8 5h2v2H8zM5 9h2v2H5zm7-1h2v2h-2z"></svg:path></svg:g>`,
})
export class CodiconGraphScatterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
