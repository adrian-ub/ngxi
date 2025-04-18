import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosListIcon],svg[ion-ios-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="92" cy="256" r="28" fill="currentColor"></svg:circle><svg:circle cx="92" cy="132" r="28" fill="currentColor"></svg:circle><svg:circle cx="92" cy="380" r="28" fill="currentColor"></svg:circle><svg:path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M432 364H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16z" fill="currentColor"></svg:path><svg:path d="M191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z" fill="currentColor"></svg:path>`,
})
export class IonIosListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
