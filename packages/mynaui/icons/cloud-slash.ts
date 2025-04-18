import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSlashIcon],svg[mynaui-cloud-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.875 21l2.793-2.793M20.875 3l-5.532 5.532m0 0q.413.803.68 1.831c4.041 0 7.933 4.23 4.255 7.384c-.91.78-2.245 1.003-3.406 1.003H8.026c-.827 0-1.632-.19-2.358-.543m9.675-9.675l-9.675 9.675M3.24 16C-1.307 9.542 7.728 3 13 6"></svg:path>`,
})
export class MynauiCloudSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
