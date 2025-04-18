import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBallerinaIcon],svg[material-icon-theme-ballerina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="m14 12l-6-2V2h6Zm-6 0l4 2.058L8 16Zm0 18V18l6-2v4l-2 10Zm10-18l6-2V2h-6Zm6 0l-4 2.058L24 16Zm0 18V18l-6-2v4l2 10Z"></svg:path>`,
})
export class MaterialIconThemeBallerinaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
