import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupIcon],svg[mdi-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 8H5.67l-.44-4h13.54M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2z"></svg:path>`,
})
export class MdiCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
