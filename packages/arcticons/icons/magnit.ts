import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagnitIcon],svg[arcticons-magnit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 5.5v5.73H17.113a5.883 5.883 0 0 0-5.883 5.883v8.577a5.73 5.73 0 0 1-5.73 5.73h0V17.189C5.5 10.733 10.733 5.5 17.189 5.5zm0 11.08v14.231c0 6.456-5.233 11.689-11.689 11.689H5.5v-5.73h25.387a5.883 5.883 0 0 0 5.883-5.883V22.31a5.73 5.73 0 0 1 5.73-5.73"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.906 29.942V17.906L24 27.038l6.094-9.132v12.188"></svg:path>`,
})
export class ArcticonsMagnitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
