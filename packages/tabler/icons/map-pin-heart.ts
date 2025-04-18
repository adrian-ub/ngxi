import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinHeartIcon],svg[tabler-map-pin-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 11a3 3 0 1 0-3.973 2.839"></svg:path><svg:path d="M11.76 21.47a2 2 0 0 1-1.173-.57l-4.244-4.243A8 8 0 1 1 20 11.069"></svg:path><svg:path d="m18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z"></svg:path></svg:g>`,
})
export class TablerMapPinHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
