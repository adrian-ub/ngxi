import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalFsharpIcon],svg[devicon-original-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#378BBA" d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z"></svg:path><svg:path fill="#378BBA" d="m39.1 64.5l21.7-21.7v43.4L39.1 64.5z"></svg:path><svg:path fill="#30B9DB" d="M128 64.5L65.1 3.8v30.4l30.4 30.4l-30.4 30.3v30.4L128 64.5z"></svg:path>`,
})
export class DeviconOriginalFsharpIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
