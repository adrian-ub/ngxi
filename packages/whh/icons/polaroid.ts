import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPolaroidIcon],svg[whh-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v896h896zm-64 640H128V128h768z"></svg:path>`,
})
export class WhhPolaroidIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
