import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterYIcon],svg[gravity-ui-circle-letter-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.586 5.281a.75.75 0 1 0-1.172.938L7.25 8.513v2.237a.75.75 0 0 0 1.5 0V8.513l1.836-2.294a.75.75 0 0 0-1.172-.938L8 7.05z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterYIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
