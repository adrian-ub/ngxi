import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMinusIcon],svg[mdi-toy-brick-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-8v-2h8zm-10-1c0-3.31 2.69-6 6-6c.7 0 1.37.13 2 .35V6h-2V5a2 2 0 0 0-2-2h-2c-1.1 0-2 .9-2 2v1h-2V5a2 2 0 0 0-2-2H7c-1.1 0-2 .9-2 2v1H3v14h10.09c-.05-.33-.09-.66-.09-1"></svg:path>`,
})
export class MdiToyBrickMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
