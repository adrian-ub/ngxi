import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNetdataIcon],svg[simple-icons-netdata-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183c-.009 5.235-4.14 9.47-9.238 9.47z"></svg:path>`,
})
export class SimpleIconsNetdataIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
