import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTerminalTagIcon],svg[iconoir-terminal-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 16h5M6 8l4 4l-4 4"></svg:path><svg:path d="M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class IconoirTerminalTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
