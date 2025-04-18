import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGoogleOptimizeIcon],svg[logos-google-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B366F6" d="M168.2 131.117c-.46-19.95-16.888-35.815-36.842-35.579H36.36v71.157h61.525v59.84a34.916 34.916 0 0 0 34.194 36.842a36.48 36.48 0 0 0 36.12-36.842z"></svg:path><svg:circle cx="35.94" cy="131.538" r="35.94" fill="#8430CE"></svg:circle><svg:path fill="#C58AF8" d="M255.913 35.76C255.714 15.951 239.6 0 219.793 0h-97.164c-18.46 1.853-32.513 17.388-32.513 35.94s14.054 34.087 32.513 35.94h62.247v59.779a35.579 35.579 0 1 0 71.097 0z"></svg:path>`,
})
export class LogosGoogleOptimizeIcon {
  readonly viewBox = input("0 0 256 264")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
