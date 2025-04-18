import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVegaIcon],svg[simple-icons-vega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.39 8.693H24l-3.123-6.68ZM6.68 1.987H0L7.098 22.03h.008l2.86-10.73zm14.197-.016l-7.098 20.042h-6.68L14.195 1.97"></svg:path>`,
})
export class SimpleIconsVegaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
