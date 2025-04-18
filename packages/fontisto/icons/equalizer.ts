import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoEqualizerIcon],svg[fontisto-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 24v-7.845c-1.306-.344-2.253-1.514-2.253-2.905s.947-2.562 2.232-2.901l.021-.005V0H24v10.344a3 3 0 0 1 .021 5.807l-.021.005v7.845zm-9.75 0V11.155c-1.306-.344-2.253-1.514-2.253-2.905s.947-2.562 2.232-2.901l.021-.005V0h1.5v5.344c1.306.344 2.253 1.514 2.253 2.905s-.947 2.562-2.232 2.901l-.021.005V24zm-10.5 0v-3.845C.944 19.811-.003 18.641-.003 17.25s.947-2.562 2.232-2.901l.021-.005V0h1.5v14.344c1.306.344 2.253 1.514 2.253 2.905s-.947 2.562-2.232 2.901l-.021.005V24z"></svg:path>`,
})
export class FontistoEqualizerIcon {
  readonly viewBox = input("0 0 26 24")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
