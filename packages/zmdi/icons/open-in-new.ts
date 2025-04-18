import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiOpenInNewIcon],svg[zmdi-open-in-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 341V192h43v149q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h149v43H43v298zM235 0h149v149h-43V73L132 282l-30-30L311 43h-76z"></svg:path>`,
})
export class ZmdiOpenInNewIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
