import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCakephpIcon],svg[cib-cakephp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18.5v4.995c0 2.756 7.161 4.989 16 4.989v-4.989c-8.839 0-16-2.24-16-4.989zm28.511 3.109L16 18.5v4.995l12.511 3.109C30.694 25.749 32 24.672 32 23.495V18.5c0 1.177-1.307 2.255-3.489 3.109M16 13.511V18.5c-8.839 0-16-2.235-16-4.989V8.506c0-2.751 7.161-4.989 16-4.989c8.833 0 16 2.239 16 4.995v5c0 1.177-1.307 2.249-3.489 3.109L16 13.506z"></svg:path>`,
})
export class CibCakephpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
