import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTataCliqIcon],svg[arcticons-tata-cliq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.296 12.576c5.955 0 10.787 4.796 10.787 10.715c0 5.929-4.832 10.725-10.787 10.725c-5.964 0-10.796-4.796-10.796-10.725c0-5.92 4.832-10.715 10.796-10.715m7.568 18.346l4.636 4.502"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsTataCliqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
