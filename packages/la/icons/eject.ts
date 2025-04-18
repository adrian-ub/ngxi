import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEjectIcon],svg[la-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.594l-.719.687l-9 9L4.594 18h22.812l-1.687-1.719l-9-9zm0 2.843L22.563 16H9.438zM4 22v2h24v-2z"></svg:path>`,
})
export class LaEjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
