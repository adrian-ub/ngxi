import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNunjucksIcon],svg[simple-icons-nunjucks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12v12h24V0H0zm8.2-1.9V3h3v17.3h-3c-.7-2.5-1.4-5-2.2-7.5v7.5H3V3h3c.8 2.3 1.5 4.7 2.2 7.1M20.9 7v11.6c0 .2-.1.7-.5 1.1s-.8.5-.9.6h-5.1c-.2 0-.7-.1-1-.5c-.4-.4-.5-.9-.6-1.2v-3.8c1-.2 2-.5 3-.7v3.1h2.1V7zM0 24"></svg:path>`,
})
export class SimpleIconsNunjucksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
