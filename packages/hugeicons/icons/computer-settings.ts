import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerSettingsIcon],svg[hugeicons-computer-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.003 2h-.997c-3.282 0-4.922 0-6.086.814a4.5 4.5 0 0 0-1.106 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081c.302.43.676.804 1.106 1.105C5.084 18 6.724 18 10.006 18h4.003c3.282 0 4.923 0 6.086-.814c.43-.3.805-.675 1.106-1.105c.615-.877.765-1.987.799-3.081"></svg:path><svg:path d="M18 9.714V11m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 9.713a3.36 3.36 0 0 0 2.774-1.43M18 3.285c1.157 0 2.176.568 2.774 1.43M18 3.287a3.36 3.36 0 0 0-2.774 1.43M18 3.287V2m4 1.929l-1.226.788M14 9.07l1.226-.788M14 3.93l1.226.788M22 9.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
