import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTwinmotionIcon],svg[simple-icons-twinmotion-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .118c-4.92 0-9.15 2.961-11 7.2h15.799v.004l-2.364 16.547C19.895 22.744 24 17.91 24 12.118h-6.261l.688-4.8H23C21.148 3.077 16.92.117 12 .117m-12 12c0 5.816 4.14 10.666 9.633 11.765l1.681-11.765Z"></svg:path>`,
})
export class SimpleIconsTwinmotionIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
