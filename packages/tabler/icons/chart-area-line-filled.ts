import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartAreaLineFilledIcon],svg[tabler-chart-area-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.22 9.375a1 1 0 0 1 1.393-.165l.094.083l4 4a1 1 0 0 1 .284.576L21 14v5a1 1 0 0 1-.883.993L20 20H3.978l-.11-.009l-.11-.02l-.107-.034l-.105-.046l-.1-.059l-.094-.07l-.06-.055l-.072-.082l-.064-.089l-.054-.096l-.016-.035l-.04-.103l-.027-.106l-.015-.108l-.004-.11l.009-.11l.019-.105q.015-.06.035-.112l.046-.105l.059-.1l4-6a1 1 0 0 1 1.165-.39l.114.05l3.277 1.638z"></svg:path><svg:path d="M15.232 3.36a1 1 0 0 1 1.382-.15l.093.083l4 4a1 1 0 0 1-1.32 1.497l-.094-.083l-3.226-3.225l-4.299 5.158a1 1 0 0 1-1.1.303l-.115-.049l-3.254-1.626L4.8 12.6a1 1 0 0 1-1.295.269L3.4 12.8a1 1 0 0 1-.269-1.295L3.2 11.4l3-4a1 1 0 0 1 1.137-.341l.11.047l3.291 1.645z"></svg:path></svg:g>`,
})
export class TablerChartAreaLineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
