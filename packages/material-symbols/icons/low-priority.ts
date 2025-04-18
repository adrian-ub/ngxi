import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLowPriorityIcon],svg[material-symbols-low-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.475q0 1.775 1.188 3.05T8.15 15.95L6.6 14.4L8 13l4 4l-4 4l-1.4-1.4L8.2 18q-2.625-.15-4.413-2.025T2 11.5q0-2.725 1.888-4.612T8.5 5H12v2H8.5Q6.625 7 5.313 8.3T4 11.475M14 18v-2h8v2zm0-5.5v-2h8v2zM14 7V5h8v2z"></svg:path>`,
})
export class MaterialSymbolsLowPriorityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
