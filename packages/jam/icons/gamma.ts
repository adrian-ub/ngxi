import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGammaIcon],svg[jam-gamma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2H2v10h10zm-1 1v3H9V5H6v6H4V5H3V3z"></svg:path>`,
})
export class JamGammaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
