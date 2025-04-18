import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumLocationOnIcon],svg[circum-location-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.933a1.72 1.72 0 0 1-1.384-.691L5.555 14.5a7.894 7.894 0 1 1 12.885-.009l-5.055 6.749a1.72 1.72 0 0 1-1.385.693m-.008-18.867a6.8 6.8 0 0 0-4.578 1.749a6.89 6.89 0 0 0-1.05 9.1l5.051 6.727a.73.73 0 0 0 .584.292a.73.73 0 0 0 .586-.292l5.044-6.734A6.874 6.874 0 0 0 12.81 3.113a7 7 0 0 0-.818-.047"></svg:path><svg:path fill="currentColor" d="M12 12.5a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5m0-4a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 8.5"></svg:path>`,
})
export class CircumLocationOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
