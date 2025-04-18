import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenLockRotationIcon],svg[hugeicons-screen-lock-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.034 3.747a2.2 2.2 0 0 0-.892-.234c-1.094-.04-1.942.802-3.637 2.489S4.96 8.532 5 9.619s.954 1.996 2.78 3.812l3.32 3.303c1.827 1.815 2.74 2.723 3.834 2.764s1.942-.803 3.638-2.49c1.367-1.36 2.183-2.17 2.427-3.005M3 12.504c.118 2.872 1.978 8.492 8.37 8.974c.376.028.564.042.618-.072s-.082-.246-.354-.51l-1.22-1.187"></svg:path><svg:path d="M15.737 5.679V4.288c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39m-3.437 5.826h3.388c.997 0 1.806-.807 1.806-1.802V7.699c0-.995-.809-1.802-1.806-1.802h-3.388c-.997 0-1.806.807-1.806 1.802v2.003c0 .995.809 1.802 1.806 1.802"></svg:path></svg:g>`,
})
export class HugeiconsScreenLockRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
