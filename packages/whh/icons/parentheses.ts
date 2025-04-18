import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhParenthesesIcon],svg[whh-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024h-64q128-160 128-512T768 0h64q91 85 141.5 216.5T1024 512t-50.5 295.5T832 1024M192 0h64Q128 160 128 512t128 512h-64q-91-85-141.5-216.5T0 512t50.5-295.5T192 0"></svg:path>`,
})
export class WhhParenthesesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
