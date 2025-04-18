import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMapSolidIcon],svg[la-map-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 4.469l-1.406.625l-6.625 2.843l-7.625-2.875l-.375-.125l-.375.157l-7 3l-.594.25V27.53l1.406-.625l6.625-2.843l7.625 2.875l.375.125l.375-.157l7-3l.594-.25zM13 7.437l6 2.25v14.876l-6-2.25zM11 7.5v14.844L6 24.5V9.656zm15 0v14.844L21 24.5V9.656z"></svg:path>`,
})
export class LaMapSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
