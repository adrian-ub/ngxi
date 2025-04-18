import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandEvernoteIcon],svg[tabler-brand-evernote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 8h5V3"></svg:path><svg:path d="M17.9 19c.6-2.5 1.1-5.471 1.1-9c0-4.5-2-5-3-5c-1.906 0-3-.5-3.5-1c-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8c1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5c1 .5 2 1.5 2 3c0 .5 0 3-3 3s-3-3-1-3m1-8h1"></svg:path></svg:g>`,
})
export class TablerBrandEvernoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
