import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguageHtml5Icon],svg[zmdi-language-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m179 334l91-25l13-138H120l-4-45h171l4-45H66l13 135h155l-5 58l-50 14l-50-14l-4-37H80l7 72zM0 6h357l-32 365l-146 51l-147-51z"></svg:path>`,
})
export class ZmdiLanguageHtml5Icon {
  readonly viewBox = input("0 0 360 424")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
