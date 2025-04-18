import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUfo2BrokenIcon],svg[solar-ufo-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.731 9c.876-.75 2.274-1.373 3.996-1.79m-3.996 5.442C4.355 14.042 7.774 15 11.73 15c5.524 0 10.002-1.869 10.002-4.174c0-1.167-1.148-2.223-3-2.98a14 14 0 0 0-2.001-.635M11.729 9c-3.191 0-4.388-.532-4.802-.82c-.146-.1-.2-.274-.2-.451A4.73 4.73 0 0 1 11.457 3H12a4.73 4.73 0 0 1 4.73 4.729c0 .177-.054.35-.2.452c-.281.195-.922.502-2.3.68M11.729 21v-3m6.001 2v-3M5.727 20v-3"></svg:path><svg:path fill="currentColor" d="M12.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarUfo2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
