import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPizzaIcon],svg[tabler-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.1 19.1 0 0 1 12 21.5"></svg:path><svg:path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.94 14.94 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01"></svg:path></svg:g>`,
})
export class TablerPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
