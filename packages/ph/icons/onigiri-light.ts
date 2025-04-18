import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOnigiriLightIcon],svg[ph-onigiri-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.82 147.6L174 51.67l-.09-.15a54 54 0 0 0-91.74 0l-.09.15l-55.9 95.93A54 54 0 0 0 72.09 230h111.82a54 54 0 0 0 45.91-82.4M162 218H94v-50a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm58.61-21.58a41.47 41.47 0 0 1-36.7 21.58H174v-50a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v50h-9.91a42 42 0 0 1-35.67-64.15l.08-.14l55.87-95.93a42 42 0 0 1 71.26 0l55.87 95.93l.08.14a41.48 41.48 0 0 1 1.02 42.57Z"></svg:path>`,
})
export class PhOnigiriLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
