import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsGridIcon],svg[rivet-icons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0H0v7h7zM2 5V2h3v3zm14-5H9v7h7zm-5 5V2h3v3zM9 9h7v7H9zm2 2v3h3v-3zM7 9H0v7h7zm-5 5v-3h3v3z"></svg:path>`,
})
export class RivetIconsGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
