import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMarketoIcon],svg[simple-icons-marketo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.146 0v24l6.134-4.886V3.334zm-2.853 18.758l-4.939 2.157V2.086l4.939 1.462zm-11.572-.553l3.78-.999V5.188l-3.762-.606z"></svg:path>`,
})
export class SimpleIconsMarketoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
