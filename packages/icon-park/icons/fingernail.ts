import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFingernailIcon],svg[icon-park-fingernail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path><svg:path d="M38 9.47214L38.343 10.5279H39.4531L38.555 11.1803L38.8981 12.2361L38 11.5836L37.1019 12.2361L37.445 11.1803L36.5469 10.5279H37.657L38 9.47214Z"></svg:path><svg:rect width="12" height="24" x="18" y="13" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 25C16 25 13 27.1176 13 31C13 34.8824 13 38.8072 13 40.7842"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 25C32 25 35 27.1176 35 31C35 34.8824 35 38.5229 35 40.5"></svg:path></svg:g>`,
})
export class IconParkFingernailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
