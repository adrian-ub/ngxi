import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbSpotOffIcon],svg[mdi-lightbulb-spot-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L15.11 17H9v-3c-2.5-1.43-5-3-5-8v-.11L1.11 3l1.28-1.27l19.72 19.73zM22 4V2H5.2l2 2zm-2 2H9.2l7.17 7.17C18.33 11.87 20 10.07 20 6m-7 16h2v-3h-2zm-4 0h2v-3H9z"></svg:path>`,
})
export class MdiLightbulbSpotOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
