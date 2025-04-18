import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeatSelectorIcon],svg[hugeicons-seat-selector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 18v-6.5a1.5 1.5 0 0 0-3 0V16a2 2 0 0 0 2 2zm13-2v-4.5a1.5 1.5 0 0 0-3 0V18h1a2 2 0 0 0 2-2m-3-2H7v4h10zm-2.5 8h-5v-4h5zM7 22h10"></svg:path><svg:path d="M18.5 10V8c0-2.828 0-4.243-.879-5.121C16.743 2 15.328 2 12.5 2h-1c-2.828 0-4.243 0-5.121.879C5.5 3.757 5.5 5.172 5.5 8v2"></svg:path></svg:g>`,
})
export class HugeiconsSeatSelectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
