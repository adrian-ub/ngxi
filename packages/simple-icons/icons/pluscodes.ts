import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPluscodesIcon],svg[simple-icons-pluscodes-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 4.8a2.4 2.4 0 0 0 2.4-2.4A2.4 2.4 0 0 0 12 0M9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 0 0 0 12a2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 4.8 12a2.4 2.4 0 0 0-2.4-2.4m19.2 0a2.4 2.4 0 0 0-2.4 2.4a2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 24 12a2.4 2.4 0 0 0-2.4-2.4M12 19.2a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 24a2.4 2.4 0 0 0 2.4-2.4a2.4 2.4 0 0 0-2.4-2.4"></svg:path>`,
})
export class SimpleIconsPluscodesIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
