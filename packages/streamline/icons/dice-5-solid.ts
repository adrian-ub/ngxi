import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDice5SolidIcon],svg[streamline-dice-5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.5A2.5 2.5 0 0 1 2.5 0h9A2.5 2.5 0 0 1 14 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 0 11.5zm9.786 2.912a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4m1.2 4.376a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0M7 8.202a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4m-1.586-3.99a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0m-1.2 6.776a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDice5SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
