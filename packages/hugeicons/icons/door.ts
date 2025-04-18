import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoorIcon],svg[hugeicons-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 22V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v14z"></svg:path><svg:path d="M8 11V7c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2v4c0 1.655-.345 2-2 2h-4c-1.655 0-2-.345-2-2M3 22h18M12 5v8m4-4H8m.008 8h-.009"></svg:path></svg:g>`,
})
export class HugeiconsDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
