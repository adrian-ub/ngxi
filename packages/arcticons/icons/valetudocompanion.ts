import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsValetudocompanionIcon],svg[arcticons-valetudocompanion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.02 6.483a18.5 18.5 0 0 1-4.13 23.42C32.454 32.787 25.879 35.972 24 41.518c-2.064-5.51-8.451-8.73-11.891-11.616a18.5 18.5 0 0 1-4.13-23.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.409 17.974c0 4.644-4.526 7.01-8.409 9.53c-3.769-2.409-8.409-4.886-8.409-9.53a8.409 8.409 0 0 1 16.818 0"></svg:path><svg:circle cx="24" cy="17.974" r="2.803" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsValetudocompanionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
