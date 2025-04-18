import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmStackPushIcon],svg[charm-stack-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.25 7.25L1.75 8L8 11.25L14.25 8l-1.5-.75M1.75 11L8 14.25L14.25 11"></svg:path><svg:path d="M8 8.25v-6.5m-2.25 4.5l2.25 2l2.25-2"></svg:path></svg:g>`,
})
export class CharmStackPushIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
