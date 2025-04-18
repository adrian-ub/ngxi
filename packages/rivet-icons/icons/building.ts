import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBuildingIcon],svg[rivet-icons-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 4h2v2H5zm6 0H9v2h2zM5 7h2v2H5zm6 0H9v2h2z"></svg:path><svg:path d="M2 0h12v14h1v2H1v-2h1zm2 14h3v-2a1 1 0 1 1 2 0v2h3V2H4z"></svg:path></svg:g>`,
})
export class RivetIconsBuildingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
