import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWatchIcon],svg[mynaui-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.667 7c-.316-1.377-.418-4-2.348-4H10.68C8.751 3 8.65 5.623 8.333 7m0 10c.316 1.377.418 4 2.348 4h2.638c1.93 0 2.032-2.623 2.348-4m1.833-7v4c0 1.657-1.231 3-2.75 3h-5.5c-1.519 0-2.75-1.343-2.75-3v-4c0-1.657 1.231-3 2.75-3h5.5c1.519 0 2.75 1.343 2.75 3"></svg:path><svg:path d="M12 10v2.5l1.604 1"></svg:path></svg:g>`,
})
export class MynauiWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
