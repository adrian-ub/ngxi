import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCampfireIcon],svg[hugeicons-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.67 16c.843-1.18 1.33-2.59 1.33-4c0-4-1.5-5-1.5-5c-.538 1.5-2 2-2 2c0-5.5-3.5-7-3.5-7S8.5 3.5 8.5 9c0 0-1.462-.5-2-2C6.5 7 5 8 5 12c0 1.41.487 2.82 1.329 4M19 19H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1"></svg:path><svg:path d="M14.5 16c0-2.5-2.5-5-2.5-5s-2.5 2.5-2.5 5"></svg:path></svg:g>`,
})
export class HugeiconsCampfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
