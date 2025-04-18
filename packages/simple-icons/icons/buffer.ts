import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBufferIcon],svg[simple-icons-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.371 5.476L11.943 0l10.686 5.476l-10.686 5.495zm3.36 4.81l7.212 3.547l7.288-3.547l3.398 1.655l-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911l7.288-3.91l3.398 1.815L11.943 24L1.371 18.273z"></svg:path>`,
})
export class SimpleIconsBufferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
