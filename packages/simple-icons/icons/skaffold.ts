import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSkaffoldIcon],svg[simple-icons-skaffold-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.602 20.097H24v3.836H6.602zm-2.766-6.692h13.562v3.837H0V6.714h3.836zm13.562-9.502H0V.067h17.398zm2.766 6.692H6.602V6.758H24v10.528h-3.836z"></svg:path>`,
})
export class SimpleIconsSkaffoldIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
