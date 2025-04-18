import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVolumeDownIcon],svg[la-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4.594L13.281 6.28L8.562 11H4v10h4.563l4.718 4.719L15 27.406zm-2 4.843v13.126L9.719 19.28L9.406 19H6v-6h3.406l.313-.281zm5.5 2.594l-1.438 1.438c.579.695.938 1.558.938 2.531s-.36 1.836-.938 2.531L18.5 19.97A5.96 5.96 0 0 0 20 16a5.96 5.96 0 0 0-1.5-3.969"></svg:path>`,
})
export class LaVolumeDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
