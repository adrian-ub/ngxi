import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMk1x1Icon],svg[flag-mk-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d20000" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffe600" d="M0 0h86.8L256 246.9L425.2 0H512L0 512h86.8L256 265.1L425.2 512H512zm512 204.8v102.4L0 204.8v102.4zM204.8 0L256 219.4L307.2 0zm0 512L256 292.6L307.2 512z"></svg:path><svg:circle cx="256" cy="256" r="82.3" fill="#ffe600" stroke="#d20000" stroke-width="18.3"></svg:circle>`,
})
export class FlagMk1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
