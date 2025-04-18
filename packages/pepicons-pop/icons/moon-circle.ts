import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMoonCircleIcon],svg[pepicons-pop-moon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.764 9.128a4.5 4.5 0 0 1 2.6-3.196c.93-.41.727-1.784-.281-1.908c-4.612-.566-8.921 2.498-9.895 7.078c-1.035 4.87 2.067 9.656 6.93 10.69s9.642-2.078 10.677-6.947a9 9 0 0 0 .195-2.166c-.032-1.019-1.388-1.343-1.877-.449a4.5 4.5 0 0 1-4.885 2.245a4.505 4.505 0 0 1-3.464-5.347m-.23 10.708c-3.782-.804-6.195-4.528-5.39-8.318a7.02 7.02 0 0 1 4.727-5.23a6.5 6.5 0 0 0-1.063 2.424c-.747 3.516 1.493 6.973 5.005 7.72a6.5 6.5 0 0 0 4.636-.751c-1.273 3.053-4.57 4.866-7.916 4.155"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopMoonCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
