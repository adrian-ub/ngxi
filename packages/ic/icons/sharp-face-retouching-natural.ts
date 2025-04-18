import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFaceRetouchingNaturalIcon],svg[ic-sharp-face-retouching-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.85 10.59C20.79 15.4 17.01 20 12 20c-4.41 0-8-3.59-8-8c0-.39 3.87-1.12 5.74-5.69c3.42 4.19 8.07 3.73 9.09 3.59l-1.48-3.25l-4.72-2.15l3.5-1.59C9.51-.14 2 4.77 2 12c0 5.52 4.48 10 10 10c7.21 0 12.12-7.45 9.1-14.13z"></svg:path><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20.6 5.6L19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5z"></svg:path>`,
})
export class IcSharpFaceRetouchingNaturalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
