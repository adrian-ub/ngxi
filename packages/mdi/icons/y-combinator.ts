import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiYCombinatorIcon],svg[mdi-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 2h20v20H2V2m9.25 15.5h1.5v-4.44L16 7h-1.5L12 11.66L9.5 7H8l3.25 6.06v4.44z" fill="currentColor"></svg:path>`,
})
export class MdiYCombinatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
