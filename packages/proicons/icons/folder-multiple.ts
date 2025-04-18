import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFolderMultipleIcon],svg[proicons-folder-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 7.624v6.127a3.5 3.5 0 0 0 3.5 3.5h8.5a3.5 3.5 0 0 0 3.5-3.5V9.187a3.5 3.5 0 0 0-3.5-3.5l-4.25.001M2.75 7.624V5.749a2 2 0 0 1 2-2h2.775a2.5 2.5 0 0 1 1.768.732L10.5 5.688M2.75 7.624h4.779a2.5 2.5 0 0 0 1.767-.732L10.5 5.688"></svg:path><svg:path stroke-linecap="round" d="M21.25 9.687v4.064a6.5 6.5 0 0 1-6.5 6.5h-8"></svg:path></svg:g>`,
})
export class ProiconsFolderMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
