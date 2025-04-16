import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLastpassIcon],svg[simple-icons-lastpass-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.629 6.857c0-.379.304-.686.686-.686c.378 0 .685.312.685.686v10.286a.684.684 0 0 1-.686.686a.69.69 0 0 1-.686-.686V6.857zM2.057 10.286a2.057 2.057 0 1 1 0 4.114a2.057 2.057 0 0 1 0-4.114m7.543 0a2.057 2.057 0 1 1 0 4.114a2.057 2.057 0 0 1 0-4.114m7.543 0a2.057 2.057 0 1 1 0 4.114a2.057 2.057 0 0 1 0-4.114"></svg:path>`,
})
export class SimpleIconsLastpassIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
