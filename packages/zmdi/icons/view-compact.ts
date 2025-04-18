import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewCompactIcon],svg[zmdi-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341V192h128v149zm149 0V192h256v149zM0 43h405v128H0z"></svg:path>`,
})
export class ZmdiViewCompactIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
