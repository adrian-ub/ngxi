import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWamrIcon],svg[arcticons-wamr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.664 5.152C3.254 10.862-.555 23.93 5.156 34.34c5.71 10.41 18.778 14.219 29.188 8.508l11.139 2.65l-2.65-11.139a21.5 21.5 0 0 0 2.646-10.316c.013-11.884-9.61-21.528-21.495-21.54a21.5 21.5 0 0 0-10.32 2.649"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.685 14.342l-1.83-1.842h-5.71l-1.83 1.842h-4.236v2.741h17.842v-2.741z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.95 17.083h14.123v16.586c0 1.01-.82 1.83-1.83 1.83H18.78a1.83 1.83 0 0 1-1.83-1.83z"></svg:path>`,
})
export class ArcticonsWamrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
