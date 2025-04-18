import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVeraIconPackIcon],svg[arcticons-vera-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.006 40.056a5.94 5.94 0 0 1-5.056-2.81L6.395 17.025a5.944 5.944 0 1 1 10.1-6.271l12.555 20.22a5.944 5.944 0 0 1-5.044 9.081Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 22.841l7.505-12.087a5.945 5.945 0 0 1 10.1 6.271L29.05 37.245a5.94 5.94 0 0 1-5.056 2.81"></svg:path><svg:circle cx="36.554" cy="13.89" r="5.944" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsVeraIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
