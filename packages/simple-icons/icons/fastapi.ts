import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFastapiIcon],svg[simple-icons-fastapi-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .039c-6.627 0-12 5.354-12 11.96c-.001 6.606 5.372 11.963 12 11.962S24.001 18.605 24 12S18.627.039 12 .039m-.829 5.415h7.55l-7.58 5.329h5.182L5.28 18.543l5.891-13.088"></svg:path>`,
})
export class SimpleIconsFastapiIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
