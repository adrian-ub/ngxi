import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMixIcon],svg[radix-icons-mix-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.15 4a1.85 1.85 0 1 1 3.7 0a1.85 1.85 0 0 1-3.7 0M4 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M5.82 11L2.5 12.837V9.163zM2.64 8.212a.7.7 0 0 0-1.039.612v4.352a.7.7 0 0 0 1.039.613l3.933-2.176a.7.7 0 0 0 0-1.225zM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm.9.2v3.6h3.6V9.2zm4.243-7.007a.45.45 0 0 0-.636-.636L11 3.364L9.193 1.557a.45.45 0 1 0-.636.636L10.364 4L8.557 5.807a.45.45 0 1 0 .636.636L11 4.636l1.807 1.807a.45.45 0 0 0 .636-.636L11.636 4z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMixIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
