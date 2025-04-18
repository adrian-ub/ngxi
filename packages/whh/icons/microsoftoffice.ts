import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMicrosoftofficeIcon],svg[whh-microsoftoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024L0 832l576 64V128L192 256v512L0 832V192L576 0l320 128v768z"></svg:path>`,
})
export class WhhMicrosoftofficeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
