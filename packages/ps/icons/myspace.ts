import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMyspaceIcon],svg[ps-myspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 206v60H2V118h59v88h342v-88h59z"></svg:path>`,
})
export class PsMyspaceIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
