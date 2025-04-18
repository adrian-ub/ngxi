import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRhombus01Icon],svg[hugeicons-rhombus-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.056 4.789C9.916 2.929 10.845 2 12 2s2.085.93 3.944 2.789l3.267 3.267C21.071 9.916 22 10.845 22 12s-.93 2.085-2.789 3.944l-3.267 3.267C14.084 21.071 13.155 22 12 22s-2.085-.93-3.944-2.789L4.79 15.944C2.929 14.084 2 13.155 2 12s.93-2.085 2.789-3.944z" color="currentColor"></svg:path>`,
})
export class HugeiconsRhombus01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
