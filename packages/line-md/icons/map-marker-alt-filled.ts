import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltFilledIcon],svg[line-md-map-marker-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerAltFilled0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerAltFilled0)"></svg:rect>`,
})
export class LineMdMapMarkerAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
