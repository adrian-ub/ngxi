import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKnifeLightIcon],svg[lets-icons-knife-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12 12l4.605-4.605c.77-.77.77-2.02 0-2.79v0a.15.15 0 0 0-.21 0L8.5 12.5"></svg:path><svg:path d="m14 10l1.394 1.394a.15.15 0 0 0 .212 0l3.066-3.066a4 4 0 0 0 0-5.656l-.066-.066a.15.15 0 0 0-.212 0L15.5 5.5M4 17l5-5a2.121 2.121 0 0 1 3 3l-5 5a2.121 2.121 0 0 1-3-3m8-2l-3-3m1.5 4.5l-3-3"></svg:path></svg:g>`,
})
export class LetsIconsKnifeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
