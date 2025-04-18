import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBowtieIcon],svg[logos-bowtie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 0L128.001 106.493L0 0v249.817l128.001-106.492L256 249.817V0zM150.135 124.908l77.552-64.521v129.042l-77.552-64.521zM28.313 60.387l77.553 64.521l-77.553 64.521V60.387z" fill="#333"></svg:path>`,
})
export class LogosBowtieIcon {
  readonly viewBox = input("0 0 256 250")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
