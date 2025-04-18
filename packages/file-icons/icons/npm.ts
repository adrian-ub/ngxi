import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNpmIcon],svg[file-icons-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.609 112.569v286.649h143.432v-215.04h71.608v215.04h71.608V112.569zM430.08 40.96v430.08H0V40.96z"></svg:path>`,
})
export class FileIconsNpmIcon {
  readonly viewBox = input("0 0 430 512")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
