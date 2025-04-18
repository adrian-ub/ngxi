import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayOnceIcon],svg[icon-park-play-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44"></svg:path><svg:path d="M38 7L44 13L38 19"></svg:path><svg:path d="M24 19V31"></svg:path><svg:path d="M24 19L21 22L19.5 23.5"></svg:path></svg:g>`,
})
export class IconParkPlayOnceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
