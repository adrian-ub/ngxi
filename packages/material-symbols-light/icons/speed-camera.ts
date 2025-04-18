import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeedCameraIcon],svg[material-symbols-light-speed-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.467 14.27l-1.213-.693l2.558-1.87L20 12.4zM5 19v-1h4.192q.27 0 .443-.173t.173-.442V11.78l-2.923-1.629q-.61-.329-.784-.982t.174-1.243l1.23-2.08q.33-.572.963-.746t1.205.155l8.89 4.923l-5.042 3.665l-2.732-1.503v5.044q0 .67-.473 1.143Q9.844 19 9.173 19z"></svg:path>`,
})
export class MaterialSymbolsLightSpeedCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
