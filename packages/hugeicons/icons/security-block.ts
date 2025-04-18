import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityBlockIcon],svg[hugeicons-security-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 5s-1.173.204-1.363.415c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.127 1.612-.382c2.01-.77 3.64-1.675 4.887-3.118M7.5 3.42C8.825 2.697 10.229 2 11.998 2c3.008 0 4.96 2.014 7.268 2.748c.938.298 1.407.447 1.596.657s.246.518.357 1.133C21.842 9.982 21.427 13.29 20 16M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
