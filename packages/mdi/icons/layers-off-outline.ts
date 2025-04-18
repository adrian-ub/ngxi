import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersOffOutlineIcon],svg[mdi-layers-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.53l-1.17.91L9.41 4L12 2l9 7l-3.72 2.89l-1.43-1.42L17.74 9zm9 9.54l-.87.68l-1.43-1.43l.67-.52zM3.41.86l18.73 18.73L20.73 21l-3.78-3.78L12 21.07l-9-7l1.62-1.26L12 18.54l3.5-2.75l-1.4-1.42L12 16L3 9l3.22-2.5L2 2.27zM12 13.47l.67-.53l-5.02-5.02L6.26 9z"></svg:path>`,
})
export class MdiLayersOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
