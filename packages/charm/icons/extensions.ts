import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmExtensionsIcon],svg[charm-extensions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 8.75h5.5v5.5m5-12.5v4m-2-2h4m-12.5-1v11.5h11.5v-5.5h-6v-6z"></svg:path></svg:g>`,
})
export class CharmExtensionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
