import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiArrowrightwardsdownwardsIcon],svg[fxemoji-arrowrightwardsdownwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#597B91" d="M508.333 32.666C508.333 16.35 494.984 3 478.668 3H29.032C14.348 3 2.333 15.015 2.333 29.699v452.602C2.333 496.985 14.348 509 29.032 509h449.635c16.316 0 29.666-13.35 29.666-29.666z"></svg:path><svg:path fill="#2B5770" d="M478.668 488.915H29.032c-14.684 0-26.699-12.015-26.699-26.699v20.085C2.333 496.985 14.348 509 29.032 509h449.635c16.316 0 29.666-13.35 29.666-29.666v-20.085c0 16.316-13.349 29.666-29.665 29.666"></svg:path><svg:path fill="#F9F9F7" d="M349.009 303.826H298.97v-92.568c0-81.368-66.198-147.566-147.566-147.566c-17.434 0-31.566 14.133-31.566 31.566s14.133 31.566 31.566 31.566c46.557 0 84.434 37.876 84.434 84.434v92.568h-50.04c-8.166 0-13.045 9.092-8.531 15.897l81.606 123.013c4.049 6.104 13.012 6.104 17.062 0l81.606-123.013c4.513-6.806-.366-15.897-8.532-15.897"></svg:path>`,
})
export class FxemojiArrowrightwardsdownwardsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
