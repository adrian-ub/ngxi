import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHandsdownIcon],svg[pixelarticons-human-handsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v4h-4zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7zm-2 4h2V9H5zm0 0v2H3v-2zm14 0h-2V9h2zm0 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsHumanHandsdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
