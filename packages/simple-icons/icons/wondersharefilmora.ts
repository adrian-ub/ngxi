import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWondersharefilmoraIcon],svg[simple-icons-wondersharefilmora-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.475 0A5.463 5.463 0 0 0 0 5.475v13.05A5.463 5.463 0 0 0 5.475 24h13.05A5.463 5.463 0 0 0 24 18.525V5.475A5.463 5.463 0 0 0 18.525 0zm4.552 3.6l4.026 4.029l-4.617 4.623l-.022-.023a1.09 1.09 0 0 0-.158-1.339L5.999 7.63zM14.528 8l4.027 4.03l-8.528 8.536L6 16.536z"></svg:path>`,
})
export class SimpleIconsWondersharefilmoraIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
