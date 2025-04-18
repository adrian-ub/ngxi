import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAo3Icon],svg[tabler-brand-ao3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 5c7.109 4.1 10.956 10.131 12 14c1.074-4.67 4.49-8.94 8-11"></svg:path><svg:path d="M12 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 9c-.278 5.494-2.337 7.33-4 10c4.013-2 6.02-5 15.05-5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5-2.007 2"></svg:path></svg:g>`,
})
export class TablerBrandAo3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
