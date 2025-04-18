import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFunctionsIcon],svg[zmdi-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 21v64H107l106 107l-106 107h149v64H0v-43l139-128L0 64V21z"></svg:path>`,
})
export class ZmdiFunctionsIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
