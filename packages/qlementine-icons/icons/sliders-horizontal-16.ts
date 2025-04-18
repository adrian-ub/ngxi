import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSlidersHorizontal16Icon],svg[qlementine-icons-sliders-horizontal-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10a.997.997 0 0 1 1 1v3a1 1 0 0 1-.883.993L8 15a.997.997 0 0 1-1-1v-1H1.58a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5H7v-1a.997.997 0 0 1 1-1m6.5 2a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5zM5 5a.997.997 0 0 1 1 1v3a1 1 0 0 1-.883.993L5 10a.997.997 0 0 1-1-1V8H1.58a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5H4V6a.997.997 0 0 1 1-1m9.5 2a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5zM9 0a.997.997 0 0 1 1 1v3a1 1 0 0 1-.883.993L9 5a.997.997 0 0 1-1-1V3H1.58a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5H8V1a.997.997 0 0 1 1-1m5.5 2a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class QlementineIconsSlidersHorizontal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
