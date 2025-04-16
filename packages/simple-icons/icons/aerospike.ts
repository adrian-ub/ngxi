import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAerospikeIcon],svg[simple-icons-aerospike-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.347 15.375L7.45 12.283l6.897-3.072zM24 0v24H0V0zm-4.705 5.386L5.672 11.548l-1.607.743l1.607.688l13.623 6.163v-1.565l-3.576-1.602V8.612l3.576-1.586z"></svg:path>`,
})
export class SimpleIconsAerospikeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
