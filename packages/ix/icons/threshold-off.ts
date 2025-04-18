import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixThresholdOffIcon],svg[ix-threshold-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zM354.8 155.707l91.669 84.617l-28.94 31.352l-47.013-43.388l-42.608 101.236l-66.256-60.724l-56.989 104.533H128v-42.666h51.328l70.995-130.144l61.762 56.608z"></svg:path>`,
})
export class IxThresholdOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
