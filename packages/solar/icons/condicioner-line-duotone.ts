import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerLineDuotoneIcon],svg[solar-condicioner-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z"></svg:path><svg:path stroke-linecap="round" d="m7 17.5l-.307.46A1.32 1.32 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L12 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L17 22m1-7.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 8.5h12M6 6h12"></svg:path></svg:g>`,
})
export class SolarCondicionerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
