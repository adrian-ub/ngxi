import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook4SparkOutlineIcon],svg[material-symbols-light-book-4-spark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.021q.27-.171.574-.288t.657-.117h1.154V4H6.23q-.523 0-.877.365Q5 4.728 5 5.23zM6.23 21q-.929 0-1.58-.64Q4 19.722 4 18.809V5.23q0-.93.65-1.58Q5.302 3 6.23 3h7.27v1H8.385v12.616h7.23V12.5h1v5.116H6.232q-.502 0-.866.341Q5 18.3 5 18.804t.365.85t.866.346H19v-8.5h1V21zM5 17.021V4zM17.5 11.5q0-2.091 1.455-3.545T22.5 6.5q-2.091 0-3.545-1.455T17.5 1.5q0 2.091-1.455 3.546T12.5 6.5q2.091 0 3.546 1.455T17.5 11.5"></svg:path>`,
})
export class MaterialSymbolsLightBook4SparkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
