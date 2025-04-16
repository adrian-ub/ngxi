import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNikeIcon],svg[simple-icons-nike-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7.8L6.442 15.276q-2.184.925-3.668.925q-1.68 0-2.437-1.177q-.475-.756-.28-1.918q.196-1.162 1.036-2.478q.7-1.065 2.297-2.8a6.1 6.1 0 0 0-.784 1.848q-.42 1.792.756 2.632q.56.392 1.54.392q.783 0 1.764-.252z"></svg:path>`,
})
export class SimpleIconsNikeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
