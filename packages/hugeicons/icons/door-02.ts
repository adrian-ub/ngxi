import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoor02Icon],svg[hugeicons-door-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 22V6c0-1.886 0-2.829.586-3.414C6.172 2 7.114 2 9 2h6c1.886 0 2.828 0 3.414.586C19 3.17 19 4.114 19 6v16M3 22h18m-5-9v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDoor02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
