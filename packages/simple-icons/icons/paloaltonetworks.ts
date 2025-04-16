import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPaloaltonetworksIcon],svg[simple-icons-paloaltonetworks-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.278 15.443l1.705 1.705l-3.426 3.426l-3.427-3.426l8.592-8.591l-1.705-1.705l3.426-3.426l3.427 3.426zM0 12.017l3.426 3.426l8.591-8.59l-3.426-3.427zm11.983 5.13l3.426 3.427L24 11.983l-3.426-3.426z"></svg:path>`,
})
export class SimpleIconsPaloaltonetworksIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
