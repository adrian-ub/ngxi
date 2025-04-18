import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorderLeft02Icon],svg[hugeicons-border-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.667 21.248c1.048-.193 1.82-.535 2.43-1.14s.954-1.37 1.15-2.408M10 21.495q.883.006 1.917.005q1.034.001 1.916-.005m7.662-7.595q.006-.876.005-1.9q.001-1.025-.005-1.9m-.249-3.8c-.195-1.04-.54-1.804-1.15-2.41c-.61-.604-1.381-.946-2.43-1.139M10 2.505q.883-.006 1.917-.005q1.034-.001 1.916.005M6.5 21.5c-1.094-.199-1.899-.55-2.536-1.171c-1.464-1.43-1.464-3.73-1.464-8.33s0-6.9 1.464-8.329c.637-.62 1.442-.972 2.536-1.17" color="currentColor"></svg:path>`,
})
export class HugeiconsBorderLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
