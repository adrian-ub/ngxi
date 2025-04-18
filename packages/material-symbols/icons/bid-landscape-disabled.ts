import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBidLandscapeDisabledIcon],svg[material-symbols-bid-landscape-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 23.6L18.2 21H5q-.825 0-1.412-.587T3 19V5.8L.4 3.2l1.425-1.425l20.4 20.4zm.2-5.5l-4.75-4.75l2.75-3.1v-3l-4.175 4.675L5.9 3H19q.825 0 1.413.588T21 5zM5 16.95l4-4L13.05 17l.55-.6l-5.45-5.45L5 14.1z"></svg:path>`,
})
export class MaterialSymbolsBidLandscapeDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
