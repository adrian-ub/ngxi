import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingLightIcon],svg[ph-smiley-melting-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-48-48a10 10 0 1 0-10 10a10 10 0 0 0 10-10m73.62-36.63A102 102 0 0 0 52 196a6 6 0 1 0 8.94-8a90.09 90.09 0 0 1 65.78-150H128a90 90 0 0 1 67.07 150a6 6 0 0 0 8.95 8a102 102 0 0 0-4.41-140.63ZM152 170h-16c-22.65 0-50-18.73-50-42a43 43 0 0 1 .58-7a6 6 0 1 0-11.83-2a54 54 0 0 0-.75 9c0 14.26 7.2 28 20.27 38.6c12 9.79 27.26 15.4 41.73 15.4h16a10 10 0 0 1 0 20H96a22 22 0 0 0 0 44a6 6 0 0 0 0-12a10 10 0 0 1 0-20h56a22 22 0 0 0 0-44"></svg:path>`,
})
export class PhSmileyMeltingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
