import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsShotcutIcon],svg[simple-icons-shotcut-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h6.667v24H0v-.889h5.778V.889H0zm7.556 0v24H24v-.889H8.444V.889H24V0zm1.388 22.611H24V1.389H8.944zM5.278 1.389H0v21.222h5.278z"></svg:path>`,
})
export class SimpleIconsShotcutIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
