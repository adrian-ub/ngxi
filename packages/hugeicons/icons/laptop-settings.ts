import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopSettingsIcon],svg[hugeicons-laptop-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 15v-1.5M4 15V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h3m7 6.714V11m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 9.713a3.36 3.36 0 0 0 2.774-1.43M18 3.285c1.157 0 2.176.568 2.774 1.43M18 3.287a3.36 3.36 0 0 0-2.774 1.43M18 3.287V2m4 1.929l-1.226.788M14 9.07l1.226-.788M14 3.93l1.226.788M22 9.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566M3.498 16.015L4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989" color="currentColor"></svg:path>`,
})
export class HugeiconsLaptopSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
