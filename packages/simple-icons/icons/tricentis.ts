import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTricentisIcon],svg[simple-icons-tricentis-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.271 10.42L6.86 3.006L9.833.034l4.438 4.438L18.742 0l2.974 2.974ZM9.825 24l-2.973-2.974l7.445-7.445l7.412 7.412l-2.974 2.973l-4.438-4.437zm-4.567-4.568l-2.974-2.974l4.47-4.47l-4.437-4.439l2.974-2.974l7.412 7.412Z"></svg:path>`,
})
export class SimpleIconsTricentisIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
