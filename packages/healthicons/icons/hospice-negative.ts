import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospiceNegativeIcon],svg[healthicons-hospice-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHospiceNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23.058 6.086l17.65 17.708a1 1 0 0 1-1.416 1.412L37 22.906V41a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V22.922l-2.294 2.286a1 1 0 1 1-1.412-1.416zM35 20.9L23.053 8.914L11 20.928V40h24zM19.25 20C16.794 20 15 22.655 15 25.517c0 .77.116 1.506.32 2.205q.15.513.36 1C17.61 33.244 23 36 23 36s8-4.355 8-10.483C31 22.655 29.206 20 26.75 20c-1.705 0-2.97 1.191-3.75 2.88c-.78-1.689-2.046-2.88-3.75-2.88" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHospiceNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHospiceNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
