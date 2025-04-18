import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSkipNextIcon],svg[ic-sharp-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 18l8.5-6L6 6zM16 6v12h2V6z"></svg:path>`,
})
export class IcSharpSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
