import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeMugSolidIcon],svg[streamline-coffee-mug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 .023a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2A.75.75 0 0 1 4 .023M1.94 5.439A1.5 1.5 0 0 1 3 5h5a1.5 1.5 0 0 1 1.429 1.044H9.5a3.25 3.25 0 1 1 0 6.5h-.228A2.5 2.5 0 0 1 7 14H4a2.5 2.5 0 0 1-2.5-2.5v-5c0-.398.158-.78.44-1.06Zm7.56 5.605a1.75 1.75 0 1 0 0-3.5zM7.75.773a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCoffeeMugSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
