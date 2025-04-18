import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterCircleIcon],svg[pepicons-pop-enter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.226 10.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M11.226 16.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M13.7 13.5a1 1 0 0 1-1 1H6.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1"></svg:path><svg:path d="M9.25 21.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEnterCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
