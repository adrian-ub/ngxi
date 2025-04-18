import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAusweisappIcon],svg[arcticons-ausweisapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 37.67a13.994 13.994 0 0 1 0-27.34V2.733a21.474 21.474 0 0 0 0 42.534Zm6-34.937v7.597a13.994 13.994 0 0 1 0 27.34v7.597a21.474 21.474 0 0 0 0-42.534"></svg:path>`,
})
export class ArcticonsAusweisappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
