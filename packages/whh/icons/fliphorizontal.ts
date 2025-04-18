import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFliphorizontalIcon],svg[whh-fliphorizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024V0h64l384 960v64zM0 960L384 0h64v1024H0zm384 0V160L64 960z"></svg:path>`,
})
export class WhhFliphorizontalIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
