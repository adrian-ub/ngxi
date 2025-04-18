import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagBeninIcon],svg[twemoji-flag-benin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCD116" d="M32 5H14v13h22V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#E8112D" d="M14 31h18a4 4 0 0 0 4-4v-9H14z"></svg:path><svg:path fill="#008751" d="M14 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h10z"></svg:path>`,
})
export class TwemojiFlagBeninIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
