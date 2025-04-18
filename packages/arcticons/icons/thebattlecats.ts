import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThebattlecatsIcon],svg[arcticons-thebattlecats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="27.021" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.139" ry="15.479"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.236 5.5l1.067 4.882l.805 3.673a19.6 19.6 0 0 1 3.853-1.59L15.41 9.36Zm23.528 0L32.59 9.36l-2.528 3.077a19.6 19.6 0 0 1 3.832 1.613l.803-3.668ZM21.28 25.828c0 1.114 1.218 2.018 2.72 2.017s2.72-.903 2.719-2.017q0-.063-.005-.127m-11.325 2.863c-.001 1.765 1.929 3.196 4.31 3.195c2.378 0 4.306-1.431 4.305-3.195q0-.101-.008-.202"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.996 28.564c-.001 1.765 1.929 3.196 4.31 3.195s4.307-1.431 4.305-3.195q0-.101-.007-.202M20.25 32.371c-.001 4.07 3.07 7.368 3.752 7.368c.56-.001 3.749-3.3 3.748-7.368q0-.233-.007-.466"></svg:path><svg:circle cx="17.617" cy="21.891" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.383" cy="21.891" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsThebattlecatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
