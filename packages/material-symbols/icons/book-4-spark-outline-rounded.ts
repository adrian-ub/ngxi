import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBook4SparkOutlineRoundedIcon],svg[material-symbols-book-4-spark-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.175q.25-.075.488-.125T6 16h1V4H6q-.425 0-.712.288T5 5zM6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h6q.425 0 .713.288T13 3t-.288.713T12 4H9v12h6v-2q0-.425.288-.712T16 13t.713.288T17 14v4H6q-.425 0-.712.288T5 19t.288.713T6 20h13v-7q0-.425.288-.712T20 12t.713.288T21 13v7q0 .825-.587 1.413T19 22zm-1-5.825V4zM17.5 12q0-2.3 1.6-3.9T23 6.5q-2.3 0-3.9-1.6T17.5 1q0 2.3-1.6 3.9T12 6.5q2.3 0 3.9 1.6t1.6 3.9"></svg:path>`,
})
export class MaterialSymbolsBook4SparkOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
