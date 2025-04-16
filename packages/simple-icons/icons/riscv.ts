import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRiscvIcon],svg[simple-icons-riscv-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.95.051h16.947v6.21L13.473 21.004l-.524.734l-5.789-6.842c4.103-.74 6.21-3.896 6.21-7.37C13.37 4.05 11.263.472 6.95.05M1.475 13.42l8.74 10.528H0V3.419h5.474c2.945 0 4.422 1.999 4.422 4.107s-1.477 4.21-4.422 4.21H1.475zm14.07 10.528H24V12.157l-7.685 10.738z"></svg:path>`,
})
export class SimpleIconsRiscvIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
