import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCheeseSolidIcon],svg[flowbite-cheese-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 3c-.179 0-.315.049-.348.06l-.002.002a1 1 0 0 0-.121.051a2 2 0 0 0-.13.072a5 5 0 0 0-.216.141a14 14 0 0 0-.975.743a3 3 0 0 0-.204.188a1.3 1.3 0 0 0-.146.178a1.01 1.01 0 0 0 .042 1.199c.28.351.277.583.244.723c-.043.18-.193.417-.508.64a1.006 1.006 0 0 1-1.394-.235a1 1 0 0 0-1.402-.23L3.676 11h17.291c-.213-3.174-1.435-5.16-2.761-6.365a7.2 7.2 0 0 0-1.992-1.288c-.278-.12-.517-.2-.698-.252a4 4 0 0 0-.32-.077A1.4 1.4 0 0 0 15 3"></svg:path><svg:path fill-rule="evenodd" d="M21 13H3v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM7 15a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m8 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteCheeseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
