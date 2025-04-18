import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleLightIcon],svg[ph-push-pin-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 170h-11L183.15 46H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h8.85L51 170H40a6 6 0 0 0 0 12h82v58a6 6 0 0 0 12 0v-58h82a6 6 0 0 0 0-12M85 46h86l21.88 124H63.15Z"></svg:path>`,
})
export class PhPushPinSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
