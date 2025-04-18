import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGridViewRoundedIcon],svg[material-symbols-light-grid-view-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.402 0-.701-.299T4 10V5q0-.402.299-.701T5 4h5q.402 0 .701.299T11 5v5q0 .402-.299.701T10 11zm0 9q-.402 0-.701-.299T4 19v-5q0-.402.299-.701T5 13h5q.402 0 .701.299T11 14v5q0 .402-.299.701T10 20zm9-9q-.402 0-.701-.299T13 10V5q0-.402.299-.701T14 4h5q.402 0 .701.299T20 5v5q0 .402-.299.701T19 11zm0 9q-.402 0-.701-.299T13 19v-5q0-.402.299-.701T14 13h5q.402 0 .701.299T20 14v5q0 .402-.299.701T19 20z"></svg:path>`,
})
export class MaterialSymbolsLightGridViewRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
