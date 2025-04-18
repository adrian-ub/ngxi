import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiamond02Icon],svg[hugeicons-diamond-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.782 4.182c.648-.499.972-.748 1.346-.909q.255-.109.527-.176C8.054 3 8.477 3 9.323 3h5.354c.846 0 1.27 0 1.668.097q.273.067.527.176c.374.16.698.41 1.346.909c2.146 1.652 3.22 2.479 3.588 3.549c.163.476.224.976.18 1.474c-.1 1.118-.948 2.141-2.643 4.188l-3.993 4.822C13.813 20.072 13.044 21 12 21s-1.813-.928-3.35-2.785l-3.993-4.822c-1.695-2.047-2.542-3.07-2.643-4.188a3.55 3.55 0 0 1 .18-1.474c.368-1.07 1.442-1.897 3.588-3.55M10 8.5h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDiamond02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
