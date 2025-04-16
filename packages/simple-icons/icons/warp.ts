import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWarpIcon],svg[simple-icons-warp-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.035 2.723h9.253A2.71 2.71 0 0 1 24 5.435v10.529a2.71 2.71 0 0 1-2.712 2.713H8.047Zm-1.681 2.6L6.766 19.677h5.598l-.399 1.6H2.712A2.71 2.71 0 0 1 0 18.565V8.036a2.71 2.71 0 0 1 2.712-2.712Z"></svg:path>`,
})
export class SimpleIconsWarpIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
