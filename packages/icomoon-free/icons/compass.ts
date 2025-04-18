import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCompassIcon],svg[icomoon-free-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 16a.5.5 0 0 1-.5-.5V8H.5a.5.5 0 0 1-.211-.953l15-7a.5.5 0 0 1 .665.665l-7 15a.5.5 0 0 1-.453.289zM2.754 7H8.5a.5.5 0 0 1 .5.5v5.746l5.465-11.712L2.753 6.999z"></svg:path>`,
})
export class IcomoonFreeCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
