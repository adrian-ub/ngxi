import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNicehashIcon],svg[simple-icons-nicehash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24c6.627 0 12-5.373 12-12h-8a4 4 0 0 1-8 0H0c0 6.627 5.373 12 12 12M8 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4m4-4h12v8H12Z"></svg:path>`,
})
export class SimpleIconsNicehashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
