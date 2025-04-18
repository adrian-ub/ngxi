import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBuildingSolidIcon],svg[rivet-icons-building-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h12v14h1v2H1v-2h1zm5 4H5v2h2zm4 0H9v2h2zM7 7H5v2h2zm4 0H9v2h2zm-2 5a1 1 0 1 0-2 0v2h2z"></svg:path>`,
})
export class RivetIconsBuildingSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
