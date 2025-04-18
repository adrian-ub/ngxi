import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayClothIcon],svg[subway-cloth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 512l149.3-42.7V0L0 42.7zM362.7 42.7V512L512 469.3V0zm-192 426.6L341.3 512V42.7L170.7 0z"></svg:path>`,
})
export class SubwayClothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
