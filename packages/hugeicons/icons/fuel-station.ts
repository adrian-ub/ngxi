import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFuelStationIcon],svg[hugeicons-fuel-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.463 13l-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L9.177 18M4 10h12"></svg:path><svg:path d="M4 21V9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3s4.243 0 5.121.879C16 4.757 16 6.172 16 9v12zm-2 0h16m-2-7h1.667c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592V16.5a1.5 1.5 0 0 0 3 0v-6.289c0-.601 0-.902-.086-1.185s-.252-.534-.586-1.034l-.773-1.16A1.87 1.87 0 0 0 19 6"></svg:path></svg:g>`,
})
export class HugeiconsFuelStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
