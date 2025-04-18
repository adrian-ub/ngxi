import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMarkdownCircleProgrammingIcon],svg[streamline-markdown-circle-programming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M3.5 9V5.243c0-.134.109-.243.243-.243v0c.096 0 .182.056.221.143l.754 1.675A.31.31 0 0 0 5 7v0a.31.31 0 0 0 .282-.182l.754-1.675A.24.24 0 0 1 6.257 5v0c.134 0 .243.109.243.243V9m3-4v4m-1-1l1 1l1-1"></svg:path></svg:g>`,
})
export class StreamlineMarkdownCircleProgrammingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
