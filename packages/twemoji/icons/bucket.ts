import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBucketIcon],svg[twemoji-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#88C9F9" d="m3 9l4.786 23.182S10 35 18 35s10.214-2.818 10.214-2.818L33 9z"></svg:path><svg:path fill="#3B88C3" d="M2 5h32v4H2z"></svg:path><svg:ellipse cx="18" cy="9.042" fill="#3B88C3" rx="16" ry="3.958"></svg:ellipse><svg:ellipse cx="18" cy="5" fill="#55ACEE" rx="16" ry="4"></svg:ellipse><svg:ellipse cx="18" cy="4.625" fill="#004A77" rx="15" ry="3.375"></svg:ellipse><svg:path fill="#99AAB5" d="M18 26.413C8.406 26.413.602 18.489.602 8.75a1 1 0 0 1 2 0c0 8.637 6.908 15.663 15.398 15.663c8.491 0 15.398-7.026 15.398-15.663a1 1 0 1 1 2 0c0 9.739-7.804 17.663-17.398 17.663"></svg:path><svg:path fill="#292F33" d="M25.406 23.826C25.406 25.579 22.09 27 18 27s-7.406-1.421-7.406-3.174s2.116 0 7.406 0s7.406-1.753 7.406 0"></svg:path>`,
})
export class TwemojiBucketIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
