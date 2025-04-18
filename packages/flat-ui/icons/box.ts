import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiBoxIcon],svg[flat-ui-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FBF063" fill-rule="evenodd" d="M7 22L50 0l43 22l-43 21.001z" clip-rule="evenodd"></svg:path><svg:path fill="#F29C1F" fill-rule="evenodd" d="M50.003 42.997L7 22v54.28l43.006 21.714z" clip-rule="evenodd"></svg:path><svg:path fill="#F0C419" fill-rule="evenodd" d="M50 97.994L93.006 76.28V22L50.003 42.997z" clip-rule="evenodd"></svg:path><svg:path fill="#F29C1F" fill-rule="evenodd" d="m27.036 11.705l42.995 21.498l2.263-1.105l-43.047-21.524z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M21.318 14.674L63.3 36.505l15.99-7.809L35.788 7.271z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m63.312 36.505l15.978-7.818v11l-15.978 8.817z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class FlatUiBoxIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
