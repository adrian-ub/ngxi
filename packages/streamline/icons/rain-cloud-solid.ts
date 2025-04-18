import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRainCloudSolidIcon],svg[streamline-rain-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.683.208a4.25 4.25 0 0 1 5.3 2.572a3 3 0 0 1 1.265-.28h.002a3 3 0 0 1 0 6H5A4.25 4.25 0 0 1 3.683.208M5.22 10.585a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67zM9.785 9.58a.75.75 0 0 1 .336 1.006l-.5 1a.75.75 0 1 1-1.342-.67l.5-1a.75.75 0 0 1 1.006-.336m-2.614 3.006a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67zM1.935 11.58a.75.75 0 0 1 .336 1.006l-.5 1a.75.75 0 1 1-1.342-.67l.5-1a.75.75 0 0 1 1.006-.336m10.136 1.006a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRainCloudSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
