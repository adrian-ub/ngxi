import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamShieldCheckFIcon],svg[jam-shield-check-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936m6.29 7.51L5.525 9.42a1 1 0 1 0-1.414 1.414l2.121 2.121a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414l-3.536 3.536z"></svg:path>`,
})
export class JamShieldCheckFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
