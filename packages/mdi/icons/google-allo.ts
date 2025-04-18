import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAlloIcon],svg[mdi-google-allo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 12v9c0 .5-.24.82-.7.96-.45.14-.8.01-1.1-.4l-1.54-2.11C16.78 21.14 14.56 22 12 22c-2.75 0-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2s5.1 1 7.05 2.95C21 6.9 22 9.25 22 12z" fill="currentColor"></svg:path>`,
})
export class MdiGoogleAlloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
