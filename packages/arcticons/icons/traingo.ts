import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTraingoIcon],svg[arcticons-traingo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.456 7.879h21.089a2.48 2.48 0 0 1 2.482 2.484V34.57a2.48 2.48 0 0 1-2.483 2.484H13.456a2.48 2.48 0 0 1-2.483-2.484V10.363a2.48 2.48 0 0 1 2.483-2.484m2.615 32.401H31.93M14.27 43.5l3.604-6.447m12.25 0l3.604 6.447"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.01 7.879h19.979v15.464H14.01z"></svg:path><svg:circle cx="17.629" cy="28.462" r="3.246" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.371" cy="28.462" r="3.246" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.521 4.5H31.48m-4.118 0v3.379M20.638 4.5v3.379m-9.665 25.639h26.054m-5.159-4.788a1.515 1.515 0 0 0-2.994 0"></svg:path><svg:circle cx="16.762" cy="27.954" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.068 33.518c-.039.99-.008 1.481-.682 1.896h-8.772c-.674-.415-.643-.905-.682-1.897"></svg:path>`,
})
export class ArcticonsTraingoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
