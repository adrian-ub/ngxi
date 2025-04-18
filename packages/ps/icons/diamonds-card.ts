import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDiamondsCardIcon],svg[ps-diamonds-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 512h256q27 0 45.5-18.5T384 448V64q0-27-18.5-45.5T320 0H64Q37 0 18.5 18.5T0 64v384q0 27 18.5 45.5T64 512M43 64q0-21 21-21h256q21 0 21 21v384q0 21-21 21H64q-21 0-21-21zm213 192l-64-85l-64 85l64 85z"></svg:path>`,
})
export class PsDiamondsCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
