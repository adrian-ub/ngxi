import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudGaming1Icon],svg[streamline-cloud-gaming-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.579 6.126v2.786M3.186 7.519h2.786M.5 7a4.643 4.643 0 0 0 4.643 4.643h4.643a3.714 3.714 0 1 0-.856-7.33A4.643 4.643 0 0 0 .5 7"></svg:path><svg:path d="M9.131 7.853a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.139.25a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-1.045-.797a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 2.388a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineCloudGaming1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
