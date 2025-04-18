import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleOutlineIcon],svg[solar-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.075 7.508c-1.329-.784-2.825.283-2.825 1.705v5.574c0 1.422 1.496 2.489 2.825 1.705l4.72-2.787c1.273-.752 1.273-2.658 0-3.41zM9.75 9.213c0-.198.096-.337.21-.408a.32.32 0 0 1 .352-.005l4.72 2.787a.47.47 0 0 1 .218.413a.47.47 0 0 1-.218.413l-4.72 2.787a.32.32 0 0 1-.353-.005a.47.47 0 0 1-.209-.408z"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
