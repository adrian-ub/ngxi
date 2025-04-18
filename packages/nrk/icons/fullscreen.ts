import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkFullscreenIcon],svg[nrk-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4h6.586l-5.293 5.293l1.414 1.414L20 5.414V12h2V2H12zM4 18.586l5.293-5.293l1.414 1.414L5.414 20H12v2H2V12h2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
