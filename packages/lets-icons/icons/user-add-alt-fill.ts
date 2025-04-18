import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAddAltFillIcon],svg[lets-icons-user-add-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="8" r="5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 10v6m3-3h-6"></svg:path><svg:path fill="currentColor" d="M17.142 20.383c.462-.105.739-.585.534-1.012c-.552-1.15-1.459-2.162-2.634-2.924C13.595 15.509 11.823 15 10 15s-3.595.508-5.042 1.447c-1.175.762-2.082 1.773-2.634 2.924c-.205.427.072.907.534 1.012a32.3 32.3 0 0 0 14.284 0"></svg:path></svg:g>`,
})
export class LetsIconsUserAddAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
