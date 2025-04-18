import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRhombIcon],svg[ix-rhomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M466.95 225.83c16.663 16.662 16.663 43.677 0 60.34L286.17 466.95c-16.662 16.663-43.678 16.663-60.34 0L45.05 286.17c-16.663-16.663-16.663-43.678 0-60.34L225.83 45.049c16.662-16.663 43.678-16.663 60.34 0zM436.78 256L256 75.218L75.22 255.999L256 436.78z"></svg:path>`,
})
export class IxRhombIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
