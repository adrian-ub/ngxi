import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuServicesTodayIcon],svg[arcticons-au-services-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.061 20.652l-1.44 5.237s-.496 1.496.838 1.496c1.54 0 2.456-2.691 2.456-2.691"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.037 20.652l-1.122 4.042s-.874 2.664 1.1 2.664c2.321 0 2.954-2.874 2.954-2.874"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.034 20.652l-1.44 5.237s-.21 1.414.804 1.391c1.362-.03 2.47-2.59 2.47-2.59m-8.807-4.038s-4.82-.727-5.816 4.246c-.88 4.392 3.728 1.739 4.376.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 11h25c.554 0 1 .446 1 1v24c0 .554-.446 1-1 1h-25zm0 0L7 5.5v37l9.5-5.5m-7-17v8M7 5.5H5.5v37H7"></svg:path>`,
})
export class ArcticonsAuServicesTodayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
