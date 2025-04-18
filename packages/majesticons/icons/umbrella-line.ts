import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUmbrellaLineIcon],svg[majesticons-umbrella-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c-7.2 0-9 6-9 9h9m0-9c7.2 0 9 6 9 9h-9m0-9V3m0 10v5c0 1 .6 3 3 3s3-2 3-3"></svg:path>`,
})
export class MajesticonsUmbrellaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
