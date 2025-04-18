import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTaggedIcon],svg[whh-tagged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 256H640L512 768H192l128-512H128L0 128L128 0h896z"></svg:path>`,
})
export class WhhTaggedIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
