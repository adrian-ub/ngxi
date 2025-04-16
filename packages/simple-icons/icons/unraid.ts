import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsUnraidIcon],svg[simple-icons-unraid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.406 8.528h1.17v6.926h-1.17zM1.17 15.454H0V8.528h1.17zm4.534.828h1.17v2.645h-1.17zm-2.86-2.969h1.169v4.282h-1.17zm5.703 0h1.17v4.282h-1.17zM22.83 8.528H24v6.926h-1.17zm-4.534-.81h-1.17V5.073h1.17zm2.86 2.95h-1.169V6.406h1.17zm-5.72 0h-1.17V6.406h1.17z"></svg:path>`,
})
export class SimpleIconsUnraidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
