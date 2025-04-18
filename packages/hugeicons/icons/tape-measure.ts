import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTapeMeasureIcon],svg[hugeicons-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 9.979C5 11.095 6.79 12 9 12V9.979c0-.994 0-1.492-.397-1.795c-.398-.303-.792-.19-1.58.037C5.815 8.57 5 9.226 5 9.98"></svg:path><svg:path d="M16 8.5c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5S5.134 5 9 5s7 1.567 7 3.5"></svg:path><svg:path d="M2 9v6.667C2 17.507 5.134 19 9 19h11c.943 0 1.414 0 1.707-.293S22 17.943 22 17v-3c0-.943 0-1.414-.293-1.707S20.943 12 20 12H9m9 7v-2m-4 2v-2m-4 2v-2m-4 1.5v-2"></svg:path></svg:g>`,
})
export class HugeiconsTapeMeasureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
