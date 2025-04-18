import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerMultipleAltIcon],svg[line-md-map-marker-multiple-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="lineMdMapMarkerMultipleAlt0"><svg:path d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate></svg:path></svg:symbol><svg:mask id="lineMdMapMarkerMultipleAlt1"><svg:use x="-2" fill="none" stroke="#fff" stroke-width="2" href="#lineMdMapMarkerMultipleAlt0"></svg:use><svg:use x="2" stroke="#000" stroke-width="4" href="#lineMdMapMarkerMultipleAlt0"></svg:use><svg:use x="2" fill="none" stroke="#fff" stroke-width="2" href="#lineMdMapMarkerMultipleAlt0"></svg:use><svg:circle cx="14" cy="9" r="2.5" fill="#fff" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.4s" values="0;1"></svg:animate></svg:circle></svg:mask></svg:defs><svg:rect width="24" height="24" mask="url(#lineMdMapMarkerMultipleAlt1)" fill="currentColor"></svg:rect>`,
})
export class LineMdMapMarkerMultipleAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
