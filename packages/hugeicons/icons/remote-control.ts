import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoteControlIcon],svg[hugeicons-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 2c3.3 0 4.95 0 5.975 1.025S19.5 5.7 19.5 9v6c0 3.3 0 4.95-1.025 5.975S15.8 22 12.5 22h-1c-3.3 0-4.95 0-5.975-1.025S4.5 18.3 4.5 15V9c0-3.3 0-4.95 1.025-5.975S8.2 2 11.5 2zM8 15h2m-2 3h2m4-3h2m-2 3h2"></svg:path><svg:path d="M15 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsRemoteControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
