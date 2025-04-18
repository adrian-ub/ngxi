import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1CardFileBoxIcon],svg[emojione-v1-card-file-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ee4237"><svg:path d="m56.03 14.836l7.6 29.444l-46.263-19.438L9.136 3z"></svg:path><svg:path d="m53.16 19.301l7.599 29.441L14.5 29.3L6.271 7.463z"></svg:path></svg:g><svg:path fill="#c13838" d="m48.06 20.747l5.809 22.513l-35.37-14.866l-6.292-16.699z"></svg:path><svg:path fill="#cc4040" d="M9.136 3L6.271 7.463l46.25 12.627l3.51-5.254z"></svg:path><svg:path fill="#c13838" d="m52.52 20.09l8.239 28.652l2.871-4.462l-7.6-29.444z"></svg:path><svg:path fill="#c13a3a" d="M2.164 25.897c1.196-.267 14.666-5.01 14.666-5.01l42.825 8.724l-11.537 12.07l-18.15.742l-15.575-7.241l-12.232-9.285"></svg:path><svg:path fill="#ee4237" fill-rule="evenodd" d="m36.586 36.29l23.07-6.677v18.936l-24.304 13.04z"></svg:path><svg:path fill="#c13838" d="M38.04 57.963c0 2-1.419 3.628-3.17 3.628L3.358 45.421C1.05 44.275.186 43.795.186 41.793V29.261c0-2.01 1.419-3.634 3.172-3.634l31.512 10.09c1.751 0 3.17 1.624 3.17 3.624v18.616"></svg:path><svg:path fill="#354a52" d="m16.571 21.872l39.599 7.741l-18.9 5.567l-30.94-9.902z"></svg:path>`,
})
export class EmojioneV1CardFileBoxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
