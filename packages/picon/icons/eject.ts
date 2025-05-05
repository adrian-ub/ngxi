import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEjectIcon],svg[picon-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V5h8v2M0 4l4-4l4 4"></svg:path>`,
})
export class PiconEjectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
