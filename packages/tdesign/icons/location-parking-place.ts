import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationParkingPlaceIcon],svg[tdesign-location-parking-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM9 7h4.636c.444 0 1.022.16 1.505.574c.52.447.859 1.131.859 2.026s-.34 1.579-.86 2.026a2.37 2.37 0 0 1-1.504.574H11V15H9zm2 3.2h2.636a.4.4 0 0 0 .2-.091a.4.4 0 0 0 .1-.138A.9.9 0 0 0 14 9.6a.9.9 0 0 0-.063-.37a.38.38 0 0 0-.3-.23H11z"></svg:path>`,
})
export class TdesignLocationParkingPlaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
