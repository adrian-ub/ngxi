import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMarkdownDocumentProgrammingIcon],svg[streamline-markdown-document-programming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h6l4 4z"></svg:path><svg:path d="M3.5 10.5V6.743c0-.134.109-.243.243-.243v0c.096 0 .182.056.221.143l.754 1.675A.31.31 0 0 0 5 8.5v0a.31.31 0 0 0 .282-.182l.754-1.675a.24.24 0 0 1 .221-.143v0c.134 0 .243.109.243.243V10.5m3-4v4m-1-1l1 1l1-1"></svg:path></svg:g>`,
})
export class StreamlineMarkdownDocumentProgrammingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
