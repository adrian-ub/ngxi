import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormTracksIcon],svg[hugeicons-tropical-storm-tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.156 7.231l-.868-1.071l2.924-1.91C4.589 2.73 3.155 8.64 3.097 8.904l-.006.026l-.009.035a4.86 4.86 0 0 0-.053 2.318c.17.768.522 1.491 1.03 2.109l.867 1.071L2 16.375c9.623 1.529 11.059-4.391 11.118-4.656l.005-.026l.01-.035a4.86 4.86 0 0 0 .052-2.318a5.04 5.04 0 0 0-1.029-2.109"></svg:path><svg:circle cx="8.106" cy="10.312" r="2.231"></svg:circle><svg:path d="M19.5 7v5.5A7.5 7.5 0 0 1 12 20m7.5-13c.7 0 2.009 1.994 2.5 2.5M19.5 7c-.7 0-2.009 1.994-2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsTropicalStormTracksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
