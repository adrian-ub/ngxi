import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPlayIcon],svg[vaadin-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v14l12-7z"></svg:path>`,
})
export class VaadinPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
