import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient2FilledIcon],svg[tdesign-city-ancient-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .802l6.053 3.993L17 6.39V9.5l3.334 2.5h1.667v2h-1v8H13v-5h-2v5H3.002v-8h-1v-2h1.667L7 9.5V6.39L5.949 4.794zM15.666 11H8.334l-1.333 1h10zm-2.661-6.002h-2.004v2.004h2.004z"></svg:path>`,
})
export class TdesignCityAncient2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
