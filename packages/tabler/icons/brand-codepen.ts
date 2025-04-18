import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCodepenIcon],svg[tabler-brand-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 15l9 6l9-6l-9-6z"></svg:path><svg:path d="m3 9l9 6l9-6l-9-6zm0 0v6m18-6v6M12 3v6m0 6v6"></svg:path></svg:g>`,
})
export class TablerBrandCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
