import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagazineRifleIcon],svg[mdi-magazine-rifle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2h1v10l-3 6l9 4l4-10V3h1V1m-9 2h6v2h-4.12v8.45L9.6 18.14L8 17.5l2-4Z"></svg:path>`,
})
export class MdiMagazineRifleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
