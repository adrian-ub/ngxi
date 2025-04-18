import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBarChartIcon],svg[fluent-emoji-flat-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E1D8EC" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20c0 1.48-.804 2.773-2 3.465L26.554 29a4 4 0 0 0-3.014.23L22 30h-3l-3-1.5l-3 1.5h-3l-1.54-.77A4 4 0 0 0 5.446 29L4 29.465A4 4 0 0 1 2 26z"></svg:path><svg:path fill="#B4ACBC" d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"></svg:path><svg:path fill="#00D26A" d="M6 30h4V10.214C10 9.542 9.453 9 8.774 9H5.226C4.547 9 4 9.542 4 10.213v19.252c.588.34 1.271.535 2 .535"></svg:path><svg:path fill="#F70A8D" d="M17.774 17h-3.548c-.679 0-1.226.542-1.226 1.214V30h6V18.214c0-.672-.547-1.214-1.226-1.214"></svg:path><svg:path fill="#00A6ED" d="M22 30h4c.729 0 1.412-.195 2-.535V7.209C28 6.539 27.453 6 26.774 6h-3.548C22.547 6 22 6.54 22 7.209z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBarChartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
