import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSifiveIcon],svg[simple-icons-sifive-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.906 12.408l3.118-9.671h11.952l1.213 3.762H8.632l-.675 2.135h11.92l1.792 5.558L12 21.319l-9.189-6.777h6.205l2.957 2.18l5.85-4.312zM19.416.443H4.585L0 14.73l12 8.826l12-8.83z"></svg:path>`,
})
export class SimpleIconsSifiveIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
