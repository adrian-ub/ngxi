import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarThreeSquaresBrokenIcon],svg[solar-three-squares-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 12H6c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414M12 17v1c0 1.886 0 2.828-.586 3.414C10.83 22 9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586c-.472-.471-.564-1.174-.582-2.414"></svg:path><svg:path d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1"></svg:path><svg:path stroke-linecap="round" d="M15 2.004c-1.24.018-1.943.11-2.414.582C12 3.172 12 4.114 12 6v2c0 1.886 0 2.829.586 3.414C13.172 12 14.114 12 16 12h2c1.886 0 2.828 0 3.414-.586C22 10.83 22 9.886 22 8V6c0-1.886 0-2.828-.586-3.414c-.471-.472-1.174-.564-2.414-.582"></svg:path></svg:g>`,
})
export class SolarThreeSquaresBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
