import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapChurchIcon],svg[map-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m49 22.396l-23-10.88V7h3V5h-3V1h-2v4h-3v2h3v4.516L7.942 19.121L1 22.396V24h7v25h12V34h10v15h12V24h7z"></svg:path>`,
})
export class MapChurchIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
