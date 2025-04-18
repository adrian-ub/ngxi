import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumViewColumnIcon],svg[circum-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.514 2.514 0 0 0 2.5 2.5h12.88a2.514 2.514 0 0 0 2.5-2.5V5.56a2.507 2.507 0 0 0-2.5-2.5M8.67 19.94H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h3.11Zm1-15.88h4.66v15.88H9.67Zm10.27 14.38a1.51 1.51 0 0 1-1.5 1.5h-3.11V4.06h3.11a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path>`,
})
export class CircumViewColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
