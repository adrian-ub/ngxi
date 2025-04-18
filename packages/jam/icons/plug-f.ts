import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPlugFIcon],svg[jam-plug-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.565h8a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20.565h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 13.065v-3.5a2 2 0 0 1 2-2m2-1H2v-5a1 1 0 1 1 2 0zm6 0H8v-5a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamPlugFIcon {
  readonly viewBox = input("-6 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
