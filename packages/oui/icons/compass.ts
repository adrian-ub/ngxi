import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiCompassIcon],svg[oui-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14.667A6.667 6.667 0 1 1 8 1.334a6.667 6.667 0 0 1 0 13.333m0-1.333A5.333 5.333 0 1 0 8 2.667a5.333 5.333 0 0 0 0 10.667M11 5L9.333 9.334L5 11l1.667-4.333zM8 8.667a.667.667 0 1 0 0-1.333a.667.667 0 0 0 0 1.333"></svg:path>`,
})
export class OuiCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
