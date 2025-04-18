import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglechronicleIcon],svg[simple-icons-googlechronicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.719 4.812l4.812 3v4l-4.812 3Zm0 10l4.812-3v9.375l-3.914-2.389a1.88 1.88 0 0 1-.898-1.6ZM2.719 0h18.562v4.812H2.719Zm4.812 21.188l13.75-8.594v4.618c0 .626-.323 1.208-.854 1.539L12 24Z"></svg:path>`,
})
export class SimpleIconsGooglechronicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
