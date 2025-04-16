import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGocdIcon],svg[simple-icons-gocd-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.043 13.237l-8.907 5.935a1.47 1.47 0 0 1-.823.25a1.45 1.45 0 0 1-.696-.173a1.48 1.48 0 0 1-.784-1.308V12a1.482 1.482 0 1 1 2.957 0v3.163L14.537 12L7.478 7.304A1.49 1.49 0 1 1 9.13 4.823l8.913 5.94a1.492 1.492 0 0 1 0 2.474M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0"></svg:path>`,
})
export class SimpleIconsGocdIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
