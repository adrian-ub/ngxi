import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletCodeIcon],svg[tabler-droplet-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.907 13.147a6.6 6.6 0 0 0-.843-2.27l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.1 7.1 0 0 0 3.99 1.561M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerDropletCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
