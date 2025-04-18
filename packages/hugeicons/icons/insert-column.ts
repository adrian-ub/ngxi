import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertColumnIcon],svg[hugeicons-insert-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.187 5.998c-.202-.889-.533-1.564-1.078-2.109C18.717 2.5 16.479 2.5 12 2.5c-4.478-.001-6.718-.001-8.109 1.39S2.5 7.52 2.5 11.998s0 6.718 1.391 8.109s3.63 1.391 8.109 1.391c4.478 0 6.718 0 8.109-1.391c.545-.545.876-1.22 1.078-2.109M21.5 12h-4m0 0h-4m4 0v4m0-4V8M9 21.5v-19m-6.5 13H9m-6.5-7H9" color="currentColor"></svg:path>`,
})
export class HugeiconsInsertColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
