import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHackclubIcon],svg[simple-icons-hackclub-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C2.4 0 0 2.4 0 12s2.4 12 12 12s12-2.4 12-12S21.6 0 12 0m4.5 19.51h-3.31v-6.507c0-.975-.187-1.622-.834-1.622c-.712 0-1.575 1.003-1.575 2.625v5.503H7.5V4.97l3.29-.563v5.428c.713-.646 1.707-.928 2.72-.928c2.156 0 2.99 1.416 2.99 3.628z"></svg:path>`,
})
export class SimpleIconsHackclubIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
