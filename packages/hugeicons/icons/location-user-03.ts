import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationUser03Icon],svg[hugeicons-location-user-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.778 16C4.666 16.633 4 17.439 4 18.316C4 20.35 7.582 22 12 22s8-1.65 8-3.684c0-.877-.666-1.683-1.778-2.316"></svg:path><svg:path d="M12.998 7h-1.996c-2.87 0-4.805 3.07-3.674 5.828a1 1 0 0 0 .918.633h.703c.237 0 .444.17.501.41l.905 3.786c.189.79.867 1.343 1.645 1.343s1.456-.554 1.645-1.343l.905-3.786a.52.52 0 0 1 .5-.41h.704a1 1 0 0 0 .918-.633C17.804 10.069 15.869 7 12.999 7"></svg:path><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsLocationUser03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
