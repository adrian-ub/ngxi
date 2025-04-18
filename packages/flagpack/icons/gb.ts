import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGbIcon],svg[flagpack-gb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#F7FCFF" d="M0 0v24h32V0z"></svg:path><svg:path fill="#F50302" d="M18 0h-4v10H0v4h14v10h4V14h14v-4H18z"></svg:path></svg:g>`,
})
export class FlagpackGbIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
