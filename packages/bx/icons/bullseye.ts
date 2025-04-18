import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBullseyeIcon],svg[bx-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6s-2.691-6-6-6m0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path><svg:path fill="currentColor" d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2m0 18c-4.337 0-8-3.663-8-8s3.663-8 8-8s8 3.663 8 8s-3.663 8-8 8"></svg:path><svg:path fill="currentColor" d="M12 10c-1.081 0-2 .919-2 2s.919 2 2 2s2-.919 2-2s-.919-2-2-2"></svg:path>`,
})
export class BxBullseyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
