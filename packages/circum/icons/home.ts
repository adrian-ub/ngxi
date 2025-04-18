import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumHomeIcon],svg[circum-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.37 10.22l-6.2-7.6a1.5 1.5 0 0 0-2.33-.01l-6.21 7.61a2.5 2.5 0 0 0-.57 1.59v7.63a2.507 2.507 0 0 0 2.5 2.5h10.88a2.507 2.507 0 0 0 2.5-2.5v-7.63a2.5 2.5 0 0 0-.57-1.59M10 20.94v-5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v5.5Zm8.94-1.5a1.51 1.51 0 0 1-1.5 1.5H15v-5.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5v5.5H6.56a1.51 1.51 0 0 1-1.5-1.5v-7.63a1.47 1.47 0 0 1 .34-.95l6.22-7.61a.47.47 0 0 1 .38-.19a.48.48 0 0 1 .39.19l6.21 7.61a1.47 1.47 0 0 1 .34.95Z"></svg:path>`,
})
export class CircumHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
