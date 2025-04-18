import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFolderIcon],svg[prime-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 19.25h-11a2.75 2.75 0 0 1-2.75-2.75v-9A2.75 2.75 0 0 1 6.5 4.75H9a.77.77 0 0 1 .57.25l2.77 3.24h5.16A2.75 2.75 0 0 1 20.25 11v5.5a2.75 2.75 0 0 1-2.75 2.75m-11-13A1.25 1.25 0 0 0 5.25 7.5v9a1.25 1.25 0 0 0 1.25 1.25h11a1.25 1.25 0 0 0 1.25-1.25V11a1.25 1.25 0 0 0-1.25-1.25H12a.77.77 0 0 1-.57-.26L8.66 6.25Z"></svg:path>`,
})
export class PrimeFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
