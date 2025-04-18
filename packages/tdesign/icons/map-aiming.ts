import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAimingIcon],svg[tdesign-map-aiming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-7.667V5.52A6.56 6.56 0 0 1 18.48 11h1.187v2H18.48A6.56 6.56 0 0 1 13 18.48v1.187h-2V18.48A6.56 6.56 0 0 1 5.52 13H4.333v-2H5.52A6.56 6.56 0 0 1 11 5.52V4.333zm-1 3.111a4.556 4.556 0 1 0 0 9.112a4.556 4.556 0 0 0 0-9.112m0 4.445a.111.111 0 1 0 0 .222a.111.111 0 0 0 0-.222M9.889 12a2.111 2.111 0 1 1 4.222 0a2.111 2.111 0 0 1-4.222 0"></svg:path>`,
})
export class TdesignMapAimingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
