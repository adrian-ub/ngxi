import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDocument20Icon],svg[fluent-color-document-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDocument200)" d="m10 2l2 4l4 2v8.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-13A1.5 1.5 0 0 1 5.5 2z"></svg:path><svg:path fill="url(#fluentColorDocument202)" fill-opacity=".5" d="m10 2l2 4l4 2v8.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-13A1.5 1.5 0 0 1 5.5 2z"></svg:path><svg:path fill="url(#fluentColorDocument201)" d="M10.01 6.5V2l6 6h-4.5a1.5 1.5 0 0 1-1.5-1.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorDocument200" x1="12.4" x2="13.782" y1="2" y2="15.479" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDocument201" x1="13" x2="11.5" y1="4.5" y2="7" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorDocument202" cx="0" cy="0" r="1" gradientTransform="rotate(131.781 7.69 4.942)scale(9.75567 5.7303)" gradientUnits="userSpaceOnUse"><svg:stop offset=".362" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorDocument20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
