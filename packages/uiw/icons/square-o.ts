import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwSquareOIcon],svg[uiw-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.818 1.364a.455.455 0 0 0-.454.454v16.364c0 .25.203.454.454.454h16.364a.455.455 0 0 0 .454-.454V1.818a.455.455 0 0 0-.454-.454zm0-1.364h16.364C19.186 0 20 .814 20 1.818v16.364A1.82 1.82 0 0 1 18.182 20H1.818A1.82 1.82 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0"></svg:path>`,
})
export class UiwSquareOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
