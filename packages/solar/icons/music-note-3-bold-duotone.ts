import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BoldDuotoneIcon],svg[solar-music-note-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21q.156.083.343.175L15.8 10.74c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262a22 22 0 0 0-1.038-.501c-.28-.123-.558-.223-.843-.256"></svg:path>`,
})
export class SolarMusicNote3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
