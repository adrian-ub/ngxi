import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxShieldXIcon],svg[bx-shield-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.48 6.105l-8-4a1 1 0 0 0-.895 0l-8 4a1 1 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a1 1 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014a1 1 0 0 0-.548-.795m-8.447 13.792C5.265 16.625 4.944 9.642 4.999 7.635l7.034-3.517l7.029 3.515c.038 1.989-.328 9.018-7.029 12.264"></svg:path><svg:path fill="currentColor" d="M14.293 8.293L12 10.586L9.707 8.293L8.293 9.707L10.586 12l-2.293 2.293l1.414 1.414L12 13.414l2.293 2.293l1.414-1.414L13.414 12l2.293-2.293z"></svg:path>`,
})
export class BxShieldXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
