import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerPhoneSyncIcon],svg[hugeicons-computer-phone-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 17.186C18.843 18 17.21 18 13.946 18H9.964c-3.264 0-4.897 0-6.054-.814a4.5 4.5 0 0 1-1.1-1.105C2 14.92 2 13.28 2 10s0-4.919.81-6.081c.3-.43.672-.804 1.1-1.105C5.067 2 6.7 2 9.964 2M12 18v4m-4 0h8"></svg:path><svg:path d="M18 2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v4c0 1.886 0 2.828-.586 3.414S19.886 14 18 14h-1c-1.886 0-2.828 0-3.414-.586S13 11.886 13 10V6c0-1.886 0-2.828.586-3.414S15.114 2 17 2zm-.5 9.5h.009"></svg:path></svg:g>`,
})
export class HugeiconsComputerPhoneSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
