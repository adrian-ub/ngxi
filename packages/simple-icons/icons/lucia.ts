import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLuciaIcon],svg[simple-icons-lucia-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.382 20.714L12 0L3.618 20.714L2.288 24h19.423zM12 13.61l-5.73 7.058l1.288-3.184L12 6.505l4.442 10.978l1.289 3.184z"></svg:path>`,
})
export class SimpleIconsLuciaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
