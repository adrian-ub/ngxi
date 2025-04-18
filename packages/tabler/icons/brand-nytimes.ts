import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandNytimesIcon],svg[tabler-brand-nytimes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.036 5.058a8 8 0 1 0 8.706 9.965"></svg:path><svg:path d="M12 21V10l-7.5 4m13-11a2.5 2.5 0 1 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8m7-7h-.01"></svg:path></svg:g>`,
})
export class TablerBrandNytimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
