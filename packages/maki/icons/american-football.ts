import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAmericanFootballIcon],svg[maki-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.53 3C3.09 3 1 7.5 1 7.5S3.09 12 7.53 12S14 7.5 14 7.5S12 3 7.53 3M11 7v1.5a.5.5 0 0 1-1 0V8H8v.5a.5.5 0 0 1-1 0V8H5v.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0V7h2v-.5a.5.5 0 0 1 1 0V7h2v-.5a.5.5 0 0 1 1 0z"></svg:path>`,
})
export class MakiAmericanFootballIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
