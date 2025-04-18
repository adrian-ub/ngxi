import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSolarPanel02Icon],svg[hugeicons-solar-panel-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.29 2.5H8.017c-1.144 0-1.716 0-2.141.293c-.426.294-.594.804-.93 1.825l-2.308 7c-.585 1.776-.878 2.664-.396 3.273s1.477.609 3.468.609h8.273c1.144 0 1.715 0 2.141-.293c.426-.294.594-.804.93-1.825l2.308-7c.585-1.776.878-2.664.396-3.273S18.281 2.5 16.29 2.5"></svg:path><svg:path d="m22 6l-3.042 9.213c-.444 1.343-.666 2.015-1.227 2.4c-.56.387-1.315.387-2.823.387H4m.5-11H19m-1.5 4H3m8 7.5v3m0 0h2m-2 0H9"></svg:path><svg:path d="M15.5 2.5h-5l-4 13h5z"></svg:path></svg:g>`,
})
export class HugeiconsSolarPanel02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
