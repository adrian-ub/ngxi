import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAckoIcon],svg[arcticons-acko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="5.861" height="7.766" x="33.181" y="20.128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.93" ry="2.93"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.299 20.128v7.766m4.395-.018l-4.391-3.865l4.391-3.887m-7.37 6.294a2.93 2.93 0 0 1-2.544 1.476h0a2.93 2.93 0 0 1-2.93-2.93v-1.905a2.93 2.93 0 0 1 2.93-2.931h0a2.93 2.93 0 0 1 2.541 1.47m-8.502 3.354a2.93 2.93 0 0 1-2.93 2.93h0a2.93 2.93 0 0 1-2.931-2.93v-1.904a2.93 2.93 0 0 1 2.93-2.93h0a2.93 2.93 0 0 1 2.93 2.93m.001 4.835v-4.835"></svg:path><svg:rect width="41" height="17.656" x="3.5" y="15.172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.828" ry="8.828"></svg:rect>`,
})
export class ArcticonsAckoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
