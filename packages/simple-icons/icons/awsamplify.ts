import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAwsamplifyIcon],svg[simple-icons-awsamplify-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.223 17.905h6.76l1.731 3.047H0l4.815-8.344l2.018-3.494l1.733 3.002zm2.52-10.371L9.408 4.65l9.415 16.301h-3.334zm2.59-4.486h3.33L24 20.952h-3.334z"></svg:path>`,
})
export class SimpleIconsAwsamplifyIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
