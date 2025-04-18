import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyGeneratorFobIcon],svg[hugeicons-key-generator-fob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22a7 7 0 0 0 7-7c0-2.4-.771-6.833-1.356-9.847c-.29-1.493-.434-2.239-.988-2.696S15.328 2 13.78 2h-3.56c-1.547 0-2.32 0-2.875.457c-.554.457-.699 1.203-.988 2.696C5.77 8.167 5 12.599 5 15a7 7 0 0 0 7 7"></svg:path><svg:path d="M16 15a4 4 0 1 1-8 0a4 4 0 0 1 8 0M12 5v1"></svg:path></svg:g>`,
})
export class HugeiconsKeyGeneratorFobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
