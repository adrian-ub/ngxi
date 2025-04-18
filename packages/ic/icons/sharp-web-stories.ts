import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWebStoriesIcon],svg[ic-sharp-web-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z"></svg:path>`,
})
export class IcSharpWebStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
