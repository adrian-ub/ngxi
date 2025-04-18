import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCodepenIcon],svg[iconoir-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z"></svg:path><svg:path d="m12 21l-9-6l9-6l9 6z"></svg:path></svg:g>`,
})
export class IconoirCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
