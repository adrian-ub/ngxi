import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPenIcon],svg[pepicons-print-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.557 12.763a.5.5 0 0 1 .141-.277l9.394-9.394a.5.5 0 0 1 .707 0l3.625 3.625a.5.5 0 0 1 0 .707l-9.394 9.394a.5.5 0 0 1-.277.14l-4.283.658a.5.5 0 0 1-.57-.57z" opacity=".2"></svg:path><svg:path d="M3.944 11.79a.5.5 0 0 1 .141-.277L14.163 1.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L8.68 16.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z"></svg:path><svg:path d="m15.472 8.173l-3.537-3.53l.707-.708l3.536 3.53z"></svg:path></svg:g>`,
})
export class PepiconsPrintPenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
