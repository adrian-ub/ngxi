import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLightningBoltFill16Icon],svg[garden-lightning-bolt-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.41 15.89c-.15 0-.27-.05-.37-.11c-.32-.22-.4-.67-.21-1.2L6.24 8H4.5c-.3 0-.55-.13-.7-.36c-.16-.23-.17-.54-.05-.84l2.57-6c.2-.45.71-.8 1.18-.8h5.17c.29 0 .55.13.7.36c.16.24.17.54.05.84L10.33 7h1.84c.37 0 .66.17.78.47c.08.21.14.63-.42 1.15l-7.29 6.87c-.34.3-.61.4-.83.4"></svg:path>`,
})
export class GardenLightningBoltFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
