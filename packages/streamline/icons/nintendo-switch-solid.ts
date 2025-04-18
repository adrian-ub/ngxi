import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNintendoSwitchSolidIcon],svg[streamline-nintendo-switch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.415 14a3.5 3.5 0 0 0 3.5-3.5v-7a3.5 3.5 0 0 0-3.5-3.5H8.242a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5zm.272-3.912a1.523 1.523 0 1 0 0-3.047a1.523 1.523 0 0 0 0 3.047M3.528 0a3.5 3.5 0 0 0-3.5 3.5v7a3.5 3.5 0 0 0 3.5 3.5h2.173a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zm-.272 3.147a1.523 1.523 0 1 0 0 3.047a1.523 1.523 0 0 0 0-3.047" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNintendoSwitchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
