import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRegainIcon],svg[arcticons-regain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.314 24c6.008-2.571 10.399-8.195 11.185-14.933c.14-1.196-.79-2.182-1.995-2.182H7.496c-1.205 0-2.134.986-1.995 2.182c.787 6.738 5.177 12.362 11.185 14.933c-6.008 2.571-10.398 8.195-11.185 14.933c-.14 1.196.79 2.182 1.995 2.182h33.008c1.205 0 2.134-.986 1.995-2.182c-.786-6.738-5.177-12.362-11.185-14.933"></svg:path>`,
})
export class ArcticonsRegainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
