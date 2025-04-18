import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMapLocationOutlineIcon],svg[lsicon-map-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 1v3m4 4h3M1 8h3m4 4v3m5.5-7a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconMapLocationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
