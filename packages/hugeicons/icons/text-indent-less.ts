import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextIndentLessIcon],svg[hugeicons-text-indent-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4.5h5m-3 5h3m-5 5h5m-3 5h3M13 3v18m7-12.5l-1.542 1.242C17.153 10.794 16.5 11.32 16.5 12s.653 1.206 1.958 2.258L20 15.5" color="currentColor"></svg:path>`,
})
export class HugeiconsTextIndentLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
