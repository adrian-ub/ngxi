import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVyperIcon],svg[file-icons-vyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m313 134l-25-45h-64l-25.65 45L256 234zm71 122l-64-111l-57 100l64 110zM192 145l-64 111l57.65 99.85L249 245zm64 111l-64 111l64 111l64-111zM128 34H0l64 111zm320 111.15L512 34H384zM70 156l52 90l64-112l-52-90zM378 44l-52 90l63.77 112l52.45-90.85z"></svg:path>`,
})
export class FileIconsVyperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
