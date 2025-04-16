import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsLetterCaseToggleIcon],svg[radix-icons-letter-case-toggle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.29 2.75a.5.5 0 0 1 .467.32l3.21 8.32a.5.5 0 0 1-.934.36l-1.05-2.725H9.61L8.567 11.75a.5.5 0 0 1-.934-.358l3.19-8.32a.5.5 0 0 1 .466-.321m.002 1.893l1.362 3.532H9.937zm-8.393.564c-1.64 0-2.89 1.479-2.89 3.403c0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 1 0-.9 0v.503A3 3 0 0 0 2.9 5.207m2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244c-.978 0-2.052.908-2.052 2.552c0 1.543.974 2.552 2.052 2.552c.883 0 1.685-.667 2.067-1.364" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsLetterCaseToggleIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
