import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBuildingIcon],svg[prime-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="2" height="2" x="9" y="6" fill="currentColor" rx=".5"></svg:rect><svg:rect width="2" height="2" x="13" y="6" fill="currentColor" rx=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="9.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="2" height="2" x="13" y="9.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="13" fill="currentColor" rx=".5"></svg:rect><svg:rect width="2" height="2" x="13" y="13" fill="currentColor" rx=".5"></svg:rect><svg:path fill="currentColor" d="M18.25 19.25h-.5V4a.76.76 0 0 0-.75-.75H7a.76.76 0 0 0-.75.75v15.25h-.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5m-2 0H11V17a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.25H7.75V4.75h8.5Z"></svg:path>`,
})
export class PrimeBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
