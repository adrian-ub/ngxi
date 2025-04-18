import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRoadIcon],svg[mdi-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h2v4h-2m0-10h2v4h-2m0-10h2v4h-2M4 22h16V2H4z"></svg:path>`,
})
export class MdiRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
