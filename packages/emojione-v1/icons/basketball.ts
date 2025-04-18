import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BasketballIcon],svg[emojione-v1-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db7c27" d="M57.55 14.45c9.695 14.11 6.113 33.402-8 43.1c-14.11 9.695-33.402 6.112-43.1-8c-9.694-14.11-6.111-33.412 8-43.1c14.11-9.692 33.412-6.109 43.1 8"></svg:path><svg:g fill="#404041"><svg:path d="M45.324 59.986s-14.8-32.98.967-55.502l1.321.73s-16.517 22.626.849 53.078l-3.137 1.69M6.446 49.549s14.587-21.66 10.563-44.685l-1.794 1.234s7.875 6.427-9.893 41.814M34.559 1.141s-18.035 22.586-14.33 59.6c0 0 2.68.795 3.545 1.102c.863.305-5.754-33.53 13.504-60.39l-2.72-.313"></svg:path><svg:path d="M1.68 26.974s23.443 16.91 60.234 11.399c0 0 .662-2.716.925-3.594c.264-.879-33.207 7.388-60.982-10.535l-.18 2.73"></svg:path></svg:g>`,
})
export class EmojioneV1BasketballIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
