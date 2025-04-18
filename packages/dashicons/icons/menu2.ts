import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMenu2Icon],svg[dashicons-menu2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 7V5H5v2h10zm0 4V9H5v2h10zm0 4v-2H5v2h10z" fill="currentColor"></svg:path>`,
})
export class DashiconsMenu2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
