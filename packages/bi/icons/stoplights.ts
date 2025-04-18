import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biStoplightsIcon],svg[bi-stoplights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-.4-1.833-1.5-2-2h2V8c-1.2-.4-1.833-1.5-2-2h2V4c-1.2-.4-1.833-1.5-2-2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class BiStoplightsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
