import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiInformation11Icon],svg[maki-information-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.599.94c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1s1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1zM3 4l-.001.74S4.5 4.634 4.5 6v1.5c0 1.5-1.501 1.74-1.501 1.74L3 10h5.2l-.001-.76s-1.2 0-1.2-1.5L7 5s0-1-1-1H3z" fill="currentColor"></svg:path>`,
})
export class MakiInformation11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
