import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaIcon],svg[mdi-bottle-soda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-9a2 2 0 0 1 .6-1.42C11.1 7.89 11 4 11 4h-1V2h4v2h-1s-.1 3.89 1.4 5.58A2 2 0 0 1 15 11"></svg:path>`,
})
export class MdiBottleSodaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
