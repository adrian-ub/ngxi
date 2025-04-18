import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatLineSpacingIcon],svg[zmdi-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 85v214h53l-74 74l-75-74h53V85H0l75-74l74 74zm85-42h256v42H181zm0 298v-42h256v42zm0-128v-42h256v42z"></svg:path>`,
})
export class ZmdiFormatLineSpacingIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
