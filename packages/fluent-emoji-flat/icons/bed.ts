import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBedIcon],svg[fluent-emoji-flat-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M5.5 27L4 28v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V28zm21 0L25 28v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V28z"></svg:path><svg:path fill="#E1D8EC" d="M5 18a.5.5 0 0 1 .464-.499q.036-.002.071-.006L9 17l3.5.5H16V21l-5 .5l-5.5-.5a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill="#533566" d="M5 11.5a1.5 1.5 0 0 0-3 0V27a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6H5z"></svg:path><svg:path fill="#3F5FFF" d="M6.75 14A1.75 1.75 0 0 0 5 15.75V17a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.25c0-.946-.731-1.5-1.687-1.735l-.123-.033c-.448-.137-3.287-.985-4.44-.982m9.75 1.996a1.5 1.5 0 0 0-1.5 1.5V21.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-2.004a3.5 3.5 0 0 0-3.5-3.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
