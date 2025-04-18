import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSafeVaultIcon],svg[streamline-safe-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M8.5 8a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m0-4.75V4.5m0 3.5v1.25m3-3h-1.25m-3.5 0H5.5m5.12-2.12l-.88.88M7.26 7.49l-.88.88m4.24 0l-.88-.88M7.26 5.01l-.88-.88M3 4.5V8m-1 4v1.5m9.5-1.5v1.5"></svg:path></svg:g>`,
})
export class StreamlineSafeVaultIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
