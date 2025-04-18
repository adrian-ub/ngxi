import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendarDownloadIcon],svg[mage-calendar-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M12 17.468v-5"></svg:path><svg:path stroke-linejoin="round" d="m9.707 15.363l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageCalendarDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
