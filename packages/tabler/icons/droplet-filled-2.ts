import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletFilled2Icon],svg[tabler-droplet-filled-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197-8l-5.2 8zM6 14h12M7.305 17.695L11 14"></svg:path><svg:path d="M10.26 19.74L16 14l-5.74 5.74z"></svg:path></svg:g>`,
})
export class TablerDropletFilled2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
