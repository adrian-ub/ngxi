import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertPolygonIcon],svg[zmdi-alert-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m469 224l-52 59l8 79l-77 17l-41 68l-72-31l-73 31l-40-67l-77-18l7-79l-52-59l52-60l-7-78l77-17l40-68l73 31l72-31l41 68l77 17l-8 79zM256 331v-43h-43v43zm0-86V117h-43v128z"></svg:path>`,
})
export class ZmdiAlertPolygonIcon {
  readonly viewBox = input("0 0 472 448")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
