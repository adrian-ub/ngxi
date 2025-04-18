import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleWineIcon],svg[mdi-bottle-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22a1 1 0 0 1-1-1V11c0-2 1-3.75 2-4V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V7c1 .25 2 2 2 4v10a1 1 0 0 1-1 1z"></svg:path>`,
})
export class MdiBottleWineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
