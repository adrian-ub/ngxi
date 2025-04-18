import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidInboxIcon],svg[fa-solid-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M567.938 243.908L462.25 85.374A48 48 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A48 48 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a48 48 0 0 0-8.062-26.625M162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918z"></svg:path>`,
})
export class FaSolidInboxIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
