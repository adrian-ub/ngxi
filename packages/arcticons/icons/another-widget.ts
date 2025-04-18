import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnotherWidgetIcon],svg[arcticons-another-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.384 33.686a3.86 3.86 0 0 1-3.4-2.033l-2.857-5.323l-2.818 5.252a4 4 0 0 1-.46.7a3.87 3.87 0 0 1-2.956 1.404H8.358a3.86 3.86 0 0 1-3.4-5.683l6.257-11.656a3.859 3.859 0 0 1 6.8 0l2.857 5.323l2.856-5.322a3.859 3.859 0 0 1 6.8 0l2.856 5.323l2.857-5.323a3.858 3.858 0 1 1 6.8 3.65l-6.257 11.655a3.86 3.86 0 0 1-3.4 2.033"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.876 33.687a3.86 3.86 0 0 1-3.404-2.035l-4.33-8.068m13.985 2.746l-1.477-2.746m-6.256.833l1.478-2.747m11.035 2.747l1.477-2.747"></svg:path>`,
})
export class ArcticonsAnotherWidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
