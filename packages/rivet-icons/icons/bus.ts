import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBusIcon],svg[rivet-icons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0H1v14h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h2zM3.5 2h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5M5 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RivetIconsBusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
