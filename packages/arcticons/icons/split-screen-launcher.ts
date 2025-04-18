import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSplitScreenLauncherIcon],svg[arcticons-split-screen-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="32.187" cy="15.466" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.55" cy="15.466" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.914" cy="15.466" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.187" cy="37.877" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.55" cy="37.877" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.657 13.457h18.61c.553 0 1 .478 1 1.068v16.45c0 .589-.447 1.067-1 1.067h-18.61c-.552 0-1-.478-1-1.068v-16.45c0-.59.448-1.067 1-1.067m-1 3.777h20.61M13.807 42.5v-5.706c0-.554.446-1 1-1h18.41c.555 0 1 .446 1 1V42.5m0-2.576h-20.41"></svg:path><svg:circle cx="26.914" cy="37.877" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSplitScreenLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
