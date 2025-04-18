import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRiceOutlineIcon],svg[lsicon-rice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 3.5h1m-1 2h1m-2.5-1h1m3 0h1M8 4.5h1M1.96 6.994c0 2.4 1.405 4.472 3.438 5.437v1.009h5.157v-1.009a6.02 6.02 0 0 0 3.438-5.437zm10.901 0c0-2.44-2.194-4.417-4.901-4.417S3.059 4.555 3.059 6.994z"></svg:path>`,
})
export class LsiconRiceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
