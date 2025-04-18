import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSuperMarioToadIcon],svg[hugeicons-super-mario-toad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.008 16.706c-.037-.38.049-.534.373-.75c3.928-2.61 10.295-2.608 13.337.009c.239.205.302.352.277.659c-.12 1.498-.524 3.228-1.78 4.21c-1.994 1.557-8.446 1.553-10.434 0c-1.243-.972-1.631-2.652-1.773-4.128M9.009 18H9m6 0h-.009"></svg:path><svg:path d="M5 18c-2-1-3-3.749-3-6C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.251-1 5-3 6"></svg:path><svg:circle cx="12" cy="7" r="3"></svg:circle><svg:path d="M3.37 7c1.299.314 1.957 1.9 1.47 3.542c-.44 1.476-1.656 2.496-2.84 2.457M20.632 7c-1.3.314-1.959 1.9-1.471 3.542c.438 1.476 1.653 2.495 2.839 2.457"></svg:path></svg:g>`,
})
export class HugeiconsSuperMarioToadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
