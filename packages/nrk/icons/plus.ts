import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkPlusIcon],svg[nrk-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14v2H5z"></svg:path><svg:path fill="currentColor" d="M11 19V5h2v14z"></svg:path>`,
})
export class NrkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
