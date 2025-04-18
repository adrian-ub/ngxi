import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowleftIcon],svg[whh-circlearrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-576H411l82-82q19-19 19-46t-19-46t-46-19t-46 19L210 465q-8 8-13 22q0 1-2 6l-.5 1.5l-.5 2.5q0 2-1 5v4q-4 32 17 53l191 191q19 19 46 19t46-19t19-46t-19-46l-82-82h357q26 0 45-19t19-45t-18.5-45t-45.5-19"></svg:path>`,
})
export class WhhCirclearrowleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
