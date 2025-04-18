import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTrackballIcon],svg[twemoji-trackball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M33 17c0 9.389-2.188 19-15 19S3 26.389 3 17S8.611 3 18 3c9.465 0 15 4.701 15 14"></svg:path><svg:path fill="#99AAB5" d="M32 13.969C32 21.891 30.062 30 18 30S4 21.891 4 13.969S9.237 3 18 3s14 3.047 14 10.969"></svg:path><svg:path fill="#CCD6DD" d="M29 12.5c0 5.246-4.925 8.5-11 8.5S7 17.746 7 12.5S11.925 3 18 3s11 4.253 11 9.5"></svg:path><svg:path fill="#744EAA" d="M28 10c0 5.523-4.478 8-10 8S8 15.523 8 10S12.477 0 18 0s10 4.477 10 10"></svg:path><svg:path fill="#292F33" d="M17 23v4.75c0 1-9.672-1-9.672-6c0-1.375.301-1.973 2.315-.984C14.134 22.969 17 22.452 17 23m2 0v4.75c0 1 9.672-1 9.672-6c0-1.375-.301-1.973-2.316-.984C21.865 22.969 19 22.452 19 23"></svg:path>`,
})
export class TwemojiTrackballIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
