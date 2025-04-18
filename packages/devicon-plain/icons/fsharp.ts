import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainFsharpIcon],svg[devicon-plain-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4zm39.1 0l21.7-21.7v43.4zm88.9 0L65.1 3.8v30.4l30.4 30.4l-30.4 30.3v30.4z"></svg:path>`,
})
export class DeviconPlainFsharpIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
