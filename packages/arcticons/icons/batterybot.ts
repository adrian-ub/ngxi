import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatterybotIcon],svg[arcticons-batterybot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.505v6.67a1 1 0 0 1-1 1h-3v4.63a2 2 0 0 1-2 2h-31a2 2 0 0 1-2-2v-17.61a2 2 0 0 1 2-2h31a2 2 0 0 1 2 2v4.31h3a1 1 0 0 1 1 1M18 13.275v21.027m21.5-14.797v8.67M11.293 13.574v20.445m21.051-20.734V34.41m-7.119-20.851v21.043"></svg:path>`,
})
export class ArcticonsBatterybotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
