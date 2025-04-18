import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKnifeIcon],svg[lets-icons-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 8l-.894-.894a.15.15 0 0 0-.212 0L8 13"></svg:path><svg:path d="m12.5 9.5l2.394 2.394a.15.15 0 0 0 .212 0l3.066-3.066a4 4 0 0 0 0-5.656l-.066-.066a.15.15 0 0 0-.212 0L14 7m-9.5 9.5l4-4a2.121 2.121 0 0 1 3 3l-4 4a2.121 2.121 0 0 1-3-3m5 0L7 14"></svg:path></svg:g>`,
})
export class LetsIconsKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
