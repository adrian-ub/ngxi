import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelLockIcon],svg[raphael-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.875 15.334v-4.876c0-4.894-3.98-8.875-8.875-8.875s-8.875 3.98-8.875 8.875v4.876H5.042v15.083h21.916V15.334zm-14.25-4.876c0-2.964 2.41-5.375 5.375-5.375s5.375 2.41 5.375 5.375v4.876h-10.75zm7.647 16.498h-4.545l1.222-3.667a2.37 2.37 0 0 1-1.325-2.12a2.375 2.375 0 1 1 4.75 0c0 .932-.542 1.73-1.324 2.12z"></svg:path>`,
})
export class RaphaelLockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
