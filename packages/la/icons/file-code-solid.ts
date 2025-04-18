import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileCodeSolidIcon],svg[la-file-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM16 13l-2 12h2l2-12zm-3.781 2.375l-2.5 3l-.531.625l.53.625l2.5 3l1.563-1.25L11.812 19l1.97-2.375zm7.562 0l-1.562 1.25L20.187 19l-1.968 2.375l1.562 1.25l2.5-3l.532-.625l-.532-.625z"></svg:path>`,
})
export class LaFileCodeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
