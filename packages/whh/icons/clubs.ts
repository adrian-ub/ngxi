import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhClubsIcon],svg[whh-clubs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-112 0-188-83q7 94 23.5 152.5T640 1024H384q20 0 36.5-58.5T444 813q-76 83-188 83q-106 0-181-75T0 640t75-181t181-75q14 0 37 3q-37-61-37-131q0-106 75-181T512 0t181 75t75 181q0 70-37 131q23-3 37-3q106 0 181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhClubsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
