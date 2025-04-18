import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMarkoIcon],svg[simple-icons-marko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 5.46h-3.39l-2.3 3.77L7.4 5.46H4l-4 6.55l4 6.53h3.39l-4-6.54L5.7 8.23L8.01 12h3.39l2.31-3.78L16.03 12l-4.01 6.54h3.39l4-6.54zm4.6 0h-3.39l4 6.54l-4.01 6.54h3.39L24 12z"></svg:path>`,
})
export class SimpleIconsMarkoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
