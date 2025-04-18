import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLoadAIcon],svg[ion-load-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="currentColor"></svg:circle><svg:circle cx="96" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="368" cy="144" r="8" fill="currentColor"></svg:circle><svg:path d="M180.1 107.6c-19.9-20.1-52.2-20.1-72.1 0-19.9 20.1-19.9 52.7 0 72.8 19.9 20.1 52.2 20.1 72.1 0 19.9-20.1 19.9-52.7 0-72.8z" fill="currentColor"></svg:path><svg:circle cx="416" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="369" cy="369" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="416" r="32" fill="currentColor"></svg:circle><svg:circle cx="144" cy="368" r="40" fill="currentColor"></svg:circle>`,
})
export class IonLoadAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
