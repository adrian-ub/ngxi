import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDogFaceIcon],svg[arcticons-emoji-dog-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.841 20.142s-1.183.814-1.802.437a1.311 1.311 0 1 1 1.364-2.24c.619.378.438 1.803.438 1.803m2.362 4.521h4.03c.262 0 .5.157.602.4l.76 1.785l-1.429.751a.656.656 0 0 1-.955-.494m-1.925.021a.656.656 0 0 1-.895.49l-1.516-.624l.714-1.904a.66.66 0 0 1 .614-.425m-1.752 8.536s-.471 5.764 1.972 6.514c1.734.533 3.376.349 3.974-.164c.574-.492 1.726-2.933 1.198-6.35m1.921-13.057s1.183.814 1.802.437a1.311 1.311 0 1 0-1.364-2.24c-.619.378-.438 1.803-.438 1.803"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.297 28.487c-.312 2.361 1.464 3.77 2.809 4.485a2.24 2.24 0 0 0 2.437-.209l1.692-1.326l1.692 1.326a2.24 2.24 0 0 0 2.437.209c1.344-.715 3.12-2.124 2.809-4.485"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.577 18.993c-1.519 3.383-.333 8.539.078 10.08c.08.3.05.613-.083.893l-1.303 2.75a1.31 1.31 0 0 1-2.184.288c-2.093-2.482-5.61-7.466-4.293-10.938c4.63-12.2 10.403-11.893 10.403-11.893c1.865-1.268 8.59-4.548 16.266.573c0 0 5.66-1.125 9.793 11.104c1.182 3.498-2.249 8.434-4.295 10.91c-.61.74-1.78.587-2.19-.28l-1.295-2.73a1.3 1.3 0 0 1-.083-.894c.411-1.54 1.596-6.697.078-10.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.001 30.862s-2.565 5.321-7.513 6.288M13.24 31.194s2.666 5.493 7.488 6.14m3.507-5.897V29.45"></svg:path>`,
})
export class ArcticonsEmojiDogFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
