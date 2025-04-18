import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintSoftDrinkOffIcon],svg[pepicons-print-soft-drink-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.59 4.5h6.821a2 2 0 0 1 1.985 2.242l-1.217 10a2 2 0 0 1-1.985 1.758H9.809a2 2 0 0 1-1.985-1.758l-1.22-10A2 2 0 0 1 8.59 4.5" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M13.411 4.5H6.589a2 2 0 0 0-1.985 2.242l1.22 10A2 2 0 0 0 7.81 18.5h4.385a2 2 0 0 0 1.985-1.758l1.217-10q.015-.12.015-.242a2 2 0 0 0-2-2M6.468 5.507A1 1 0 0 1 6.59 5.5h6.822a1 1 0 0 1 .993 1.12l-1.218 10a1 1 0 0 1-.992.88H7.809a1 1 0 0 1-.992-.879l-1.22-10a1 1 0 0 1 .871-1.114" clip-rule="evenodd"></svg:path><svg:path d="M8.978 14.647a.5.5 0 1 1-.956-.294l4-13a.5.5 0 1 1 .956.294z"></svg:path><svg:path d="M5.5 10a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zm6.879-8.015a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintSoftDrinkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
