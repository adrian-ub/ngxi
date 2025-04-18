import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilServerSolidIcon],svg[basil-server-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.947 5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-13a1.5 1.5 0 0 1-1.5-1.5zM6 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6.053 7a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H12.75v1.75H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h6.25V18.5H5.447a1.5 1.5 0 0 1-1.5-1.5zM6 15a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class BasilServerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
