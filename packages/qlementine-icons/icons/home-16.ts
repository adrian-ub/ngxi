import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsHome16Icon],svg[qlementine-icons-home-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.63 1.23a1 1 0 0 0-1.266 0l-5 4.09a1 1 0 0 0-.367.774v8.41a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8.41a1 1 0 0 0-.368-.774zM3 6.09L8 2l5 4.09V14h-3V9a.997.997 0 0 0-1-1H7a.997.997 0 0 0-1 1v5H3zM9 9v5H7V9z"></svg:path>`,
})
export class QlementineIconsHome16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
