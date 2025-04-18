import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRubygemsIcon],svg[file-icons-rubygems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m134 168l-63 64l153 153l153-153l-63-64zM223 0L0 128v256l223 128l224-128V128zm181 360L223 464L43 360V152L223 48l181 104z"></svg:path>`,
})
export class FileIconsRubygemsIcon {
  readonly viewBox = input("0 0 447 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
