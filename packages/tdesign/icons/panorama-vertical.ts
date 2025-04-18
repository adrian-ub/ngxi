import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaVerticalIcon],svg[tdesign-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.156 1h17.688l-.386 1.287v.002l-.003.009l-.011.038l-.045.158c-.04.14-.096.348-.165.614a42 42 0 0 0-.503 2.213C19.363 7.161 19 9.591 19 12s.362 4.838.73 6.679a42 42 0 0 0 .668 2.827l.045.158l.011.038l.003.01l.386 1.288H3.156l.386-1.287v-.002l.004-.009l.01-.038l.046-.158a42 42 0 0 0 .668-2.827c.368-1.84.73-4.27.73-6.679s-.362-4.838-.73-6.679a42 42 0 0 0-.668-2.827l-.045-.158l-.011-.038l-.003-.01zm2.645 2c.128.519.279 1.175.43 1.929C6.613 6.839 7 9.409 7 12s-.388 5.162-.77 7.071A45 45 0 0 1 5.8 21h12.4a45 45 0 0 1-.43-1.929c-.381-1.91-.77-4.48-.77-7.071s.388-5.162.77-7.071c.15-.754.302-1.41.43-1.929z"></svg:path>`,
})
export class TdesignPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
