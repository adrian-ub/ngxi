import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHelpOutlineIcon],svg[zmdi-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 344v-43h43v43zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50m0-299q35.5 0 60.5 25t25 60q0 18-10 32.5t-22 23t-22 22t-10 29.5h-43q0-23 10-39.5t22-24t22-18.5t10-25q0-17-12.5-29.5t-30-12.5t-30 12.5T171 173h-43q0-35 25-60t60.5-25"></svg:path>`,
})
export class ZmdiHelpOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
