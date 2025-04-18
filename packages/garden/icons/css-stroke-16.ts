import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCssStroke16Icon],svg[garden-css-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4c1.1 0 2 .9 2 2c0 .3-.2.5-.5.5S14 6.3 14 6c0-.6-.4-1-1-1s-1 .4-1 1s.4 1 1 1c1.1 0 1.9.8 2 1.9V10c0 1.1-.9 2-2 2s-1.9-.8-2-1.9v-.6c0-.3.2-.5.5-.5c.2 0 .4.2.5.4v.6c0 .6.4 1 1 1c.5 0 .9-.4 1-.9V9c0-.5-.4-.9-.9-1H13c-1.1 0-2-.9-2-2s.9-2 2-2M8 4c1.1 0 2 .9 2 2c0 .3-.2.5-.5.5S9 6.3 9 6c0-.6-.4-1-1-1s-1 .4-1 1s.4 1 1 1c1.1 0 1.9.8 2 1.9V10c0 1.1-.9 2-2 2s-1.9-.8-2-1.9v-.6c0-.3.2-.5.5-.5c.2 0 .4.2.5.4v.6c0 .6.4 1 1 1c.5 0 .9-.4 1-.9V9c0-.5-.4-.9-.9-1H8c-1.1 0-2-.9-2-2s.9-2 2-2M3 4c1.1 0 1.9.8 2 1.9v.6c0 .3-.2.5-.5.5c-.2 0-.4-.2-.5-.4V6c0-.6-.4-1-1-1c-.5 0-.9.4-1 .9V10c0 .6.4 1 1 1c.5 0 .9-.4 1-.9v-.6c0-.3.2-.5.5-.5c.2 0 .4.2.5.4v.6c0 1.1-.9 2-2 2s-1.9-.8-2-1.9V6c0-1.1.9-2 2-2"></svg:path>`,
})
export class GardenCssStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
