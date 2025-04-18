import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDotprojectIcon],svg[whh-dotproject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 320q-66 0-113-47t-47-113t47-113T864 0t113 47t47 113t-47 113t-113 47M384 0h256v1024H384zM160 1024q-66 0-113-47T0 864t47-113t113-47t113 47t47 113t-47 113t-113 47"></svg:path>`,
})
export class WhhDotprojectIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
