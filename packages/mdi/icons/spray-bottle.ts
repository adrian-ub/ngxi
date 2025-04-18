import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSprayBottleIcon],svg[mdi-spray-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.72 10.43C14.68 8.39 14.5 4.66 14.5 4H13v2H9V4H7c0-1.1.9-2 2-2h7v1c0 .08.04 4.63 1.78 6.37zM17 2v2h1V2zm-2 10c-2-2-2-5-2-5H9v2c0 1 0 1-1 2s-1 2-1 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2z"></svg:path>`,
})
export class MdiSprayBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
