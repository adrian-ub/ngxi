import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJm4x3Icon],svg[flag-jm-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#000001" d="m0 0l320 240L0 480zm640 0L320 240l320 240z"></svg:path><svg:path fill="#090" d="m0 0l320 240L640 0zm0 480l320-240l320 240z"></svg:path><svg:path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z"></svg:path><svg:path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z"></svg:path></svg:g>`,
})
export class FlagJm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
