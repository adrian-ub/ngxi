import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionNuclearSharpIcon],svg[ion-nuclear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="none" d="m223.47 335.59l-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68"></svg:path><svg:path fill="currentColor" d="M403.08 108.92a208 208 0 0 0-294.16 294.16a208 208 0 0 0 294.16-294.16M342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.2 170.2 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.2 170.2 0 0 1 73.83 119l-85.48-.09A86 86 0 0 1 342 256"></svg:path>`,
})
export class IonNuclearSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
