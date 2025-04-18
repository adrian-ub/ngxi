import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBoxIcon],svg[ion-ios-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112 400h288V208H112v192zm112-160h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="currentColor"></svg:path><svg:path d="M96 112v80h320v-80z" fill="currentColor"></svg:path>`,
})
export class IonIosBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
