import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesPaintingPaintingEntertainmentDisplayMuseumEventHobbyExhibitIcon],svg[streamline-travel-places-painting-painting-entertainment-display-museum-event-hobby-exhibit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="4.24" rx=".5"></svg:rect><svg:circle cx="4.25" cy="7.99" r="1.25"></svg:circle><svg:path d="m3.75 13.24l4.7-4a1.32 1.32 0 0 1 1.87.15l3.07 3.68M3.5 4.24L6.25 1.1a1 1 0 0 1 1.5 0l2.75 3.14"></svg:path></svg:g>`,
})
export class StreamlineTravelPlacesPaintingPaintingEntertainmentDisplayMuseumEventHobbyExhibitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
