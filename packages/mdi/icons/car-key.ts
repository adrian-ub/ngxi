import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarKeyIcon],svg[mdi-car-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 0C7.3 0 6 1.3 6 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H14v2h2V4h2V2h-6.2C11.4.8 10.3 0 9 0m0 2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M6.5 8c-.7 0-1.2.4-1.4 1L3 15v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6c-.2-.6-.8-1-1.4-1zm0 1.5h11L19 14H5zm0 6.5c.8 0 1.5.7 1.5 1.5S7.3 19 6.5 19S5 18.3 5 17.5S5.7 16 6.5 16m11 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiCarKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
