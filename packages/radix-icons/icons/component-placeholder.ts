import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsComponentPlaceholderIcon],svg[radix-icons-component-placeholder-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.803 7.146a.5.5 0 1 1 .707.708a.5.5 0 0 1-.707-.708m-.707 1.415a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707m-1.414 1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707m-1.414 1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707M7.146 13.51a.5.5 0 1 1 .708-.707a.5.5 0 0 1-.708.707" clip-rule="evenodd"></svg:path><svg:path d="M2.904 8.56a.5.5 0 1 0 .707.708a.5.5 0 0 0-.707-.707m1.414 1.415a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707m1.414 1.414a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707M2.197 7.854a.5.5 0 0 0 .064-.63a.506.506 0 0 0-.771-.078a.5.5 0 0 0 .707.708M3.61 5.732a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707m1.414-1.414a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707M6.44 2.904a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707M7.854 1.49a.5.5 0 1 0-.708.707a.5.5 0 0 0 .708-.707m1.414 1.414a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707m1.414 1.414a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707m1.414 1.414a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707"></svg:path></svg:g>`,
})
export class RadixIconsComponentPlaceholderIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
