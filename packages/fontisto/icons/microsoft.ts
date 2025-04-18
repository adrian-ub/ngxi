import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMicrosoftIcon],svg[fontisto-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v10.719h10.719V0zm13.279 0v10.719h10.719V0zM0 13.281V24h10.719V13.281zm13.279 0V24h10.719V13.281z"></svg:path>`,
})
export class FontistoMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
