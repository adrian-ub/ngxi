import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintEnterIcon],svg[pepicons-print-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.25 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1z" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M8.547 7.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.083-2.5a.5.5 0 0 1 .064-.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.547 12.884a.5.5 0 0 1-.065-.704l2.084-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 10a.5.5 0 0 1-.5.5H3a.5.5 0 0 1 0-1h7.5a.5.5 0 0 1 .5.5m5 7a.5.5 0 0 1-.5.5H6.3a.5.5 0 0 1 0-1h9.2a.5.5 0 0 1 .5.5m0-14a.5.5 0 0 1-.5.5H6.326a.5.5 0 1 1 0-1H15.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.25 17.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5m0-10a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5m9.35 10a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 1 0v14a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintEnterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
