import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMygetIcon],svg[simple-icons-myget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.96 0L1.1 4.34v14.28L11.9 24l11-5.38V13.8h-3.2v2.87l-7.8 3.83l-7.64-3.83V8.02l7.64 3.72l10.8-5.6Zm-.24 3.53L16.02 6l-4.15 2.17l-5.22-2.56Z"></svg:path>`,
})
export class SimpleIconsMygetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
