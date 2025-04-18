import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsServerlessIcon],svg[file-icons-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0-.002v106.617h169.305L197.38-.002zm286.7 0l-28.077 106.617H512V-.002zM0 202.693v106.612h115.926l28.076-106.612zm233.322 0l-28.076 106.612H512V202.693zM0 405.387v106.611h62.545l28.08-106.611zm179.941 0l-28.076 106.611h360.133V405.387z"></svg:path>`,
})
export class FileIconsServerlessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
