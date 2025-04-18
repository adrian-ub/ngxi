import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFullbordersIcon],svg[whh-fullborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 960V0h960v960zm64-64h384V512H64zm0-832v384h384V64zm832 0H512v384h384zm0 448H512v384h384z"></svg:path>`,
})
export class WhhFullbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
