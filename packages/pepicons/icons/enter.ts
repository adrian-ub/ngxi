import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsEnterIcon],svg[pepicons-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="m8.867 8l2.083 2.5L8.867 8Zm0 5l2.083-2.5L8.867 13Z" clip-rule="evenodd"></svg:path><svg:path d="M9.7 10.5H3.2m12.05 7h-9m9-14h-9m0 14v-4m0-6v-4m9.35 14v-14"></svg:path></svg:g>`,
})
export class PepiconsEnterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
