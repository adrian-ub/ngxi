import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons11stIcon],svg[arcticons-11st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 19.776l2.902-1.58v11.608m12.489-11.608h5.805L37.5 24l-5.804 5.804H20.208V18.196l-2.902 1.58"></svg:path>`,
})
export class Arcticons11stIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
