import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DoubleUpIcon],svg[icons8-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.688l-.72.718l-11.5 11.5l1.44 1.407L16 7.53l10.78 10.782l1.44-1.406l-11.5-11.5zm0 7l-.72.718l-11.5 11.5l1.44 1.407L16 14.53l10.78 10.783l1.44-1.407l-11.5-11.5l-.72-.72z"></svg:path>`,
})
export class Icons8DoubleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
