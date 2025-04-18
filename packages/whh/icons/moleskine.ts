import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMoleskineIcon],svg[whh-moleskine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-64V704h128V320h-128V0h64q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-704-704v384h576v320h-512q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h512v320z"></svg:path>`,
})
export class WhhMoleskineIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
