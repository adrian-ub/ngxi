import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMoveHAIcon],svg[fontisto-move-h-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.783 12.208a2.608 2.608 0 1 1 5.215 0a2.608 2.608 0 0 1-5.215.001zm-9.392 0a2.609 2.609 0 1 1 5.217 0a2.609 2.609 0 0 1-5.217.001zm-9.391 0a2.609 2.609 0 1 1 2.609 2.61h-.001A2.61 2.61 0 0 1 0 12.21z"></svg:path>`,
})
export class FontistoMoveHAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
