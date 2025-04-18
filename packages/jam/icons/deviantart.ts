import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDeviantartIcon],svg[jam-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.985 0H8.846L7.141 3.211a1.2 1.2 0 0 1-1.066.631H.033v5.1h3.27c.362 0 .596.373.43.686l-3.7 6.967v3.375h4.131l1.706-3.21a1.2 1.2 0 0 1 1.066-.632h6.049v-5.1H9.707a.47.47 0 0 1-.43-.686l3.708-6.98z"></svg:path>`,
})
export class JamDeviantartIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
