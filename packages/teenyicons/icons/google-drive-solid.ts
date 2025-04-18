import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleDriveSolidIcon],svg[teenyicons-google-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.563 1.258A.5.5 0 0 1 5 1h5a.5.5 0 0 1 .436.255L14.23 8H8.473L4.576 1.765a.5.5 0 0 1-.013-.507M3.91 14h8.59a.5.5 0 0 0 .447-.276l2-4A.5.5 0 0 0 14.5 9H7.092zM.064 9.255l3.792-6.742l3.05 4.88l-3.982 6.372a.5.5 0 0 1-.871-.041l-2-4a.5.5 0 0 1 .011-.47"></svg:path>`,
})
export class TeenyiconsGoogleDriveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
