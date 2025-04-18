import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNewsbreakIcon],svg[arcticons-newsbreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.832 23.697l-9.027-12.938l-12.345 4.408l12.962 24.557l14.24-7.671m-20.867-4.884L6.765 40.552c-.48.583-1.42.115-1.243-.62l5.938-24.764"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.422 39.724L41.27 7.537c.342-.654 1.336-.325 1.22.404l-3.828 24.112"></svg:path>`,
})
export class ArcticonsNewsbreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
