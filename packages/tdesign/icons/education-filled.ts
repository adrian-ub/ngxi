import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEducationFilledIcon],svg[tdesign-education-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.835 8.5L12 .807L.165 8.5L12 16.192l8-5.2V16h2V9.693z"></svg:path><svg:path fill="currentColor" d="M5 17.5v-3.665l7 4.55l7-4.55V17.5c0 1.47-1.014 2.615-2.253 3.338C15.483 21.576 13.802 22 12 22s-3.482-.424-4.747-1.162C6.014 20.115 5 18.97 5 17.5"></svg:path>`,
})
export class TdesignEducationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
