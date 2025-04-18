import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSkitchIcon],svg[whh-skitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-64 0-141-20.5t-155-57T256 856T125.5 740t-91-138.5T0 448q0-141 55.5-230.5T192 128q84 0 142 64q-4 11-20 43t-24.5 62.5T284 361q55-149 186.5-255T736 0q119 0 203.5 84.5T1024 288q0 71-17.5 130.5t-46 102.5t-62.5 83t-68 81t-62.5 86.5t-46 110T704 1024"></svg:path>`,
})
export class WhhSkitchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
