import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBasketballIcon],svg[arcticons-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.558 25.58c7.417-13.344 27.41-17.984 42.182-7.267"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.966 2.59c-6.046 1.91-8.5 14.547 2.96 21.292c6.691 3.939 9.018 1.267 15.506 6.827"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.55 3.485c-3.932 8.108-2.562 29.798 17.523 38.948M6.449 11.579c5.8.126 7.085 6.666 5.632 12.592s-3.766 9.363-.71 17.231"></svg:path>`,
})
export class ArcticonsBasketballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
