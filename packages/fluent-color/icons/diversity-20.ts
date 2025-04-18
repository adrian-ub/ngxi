import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDiversity20Icon],svg[fluent-color-diversity-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDiversity200)" d="M14.495 10.831a1 1 0 0 0-1 0l-1.99 1.15a1 1 0 0 0-.5.865v2.298a1 1 0 0 0 .5.866l1.99 1.149a1 1 0 0 0 1 0l1.99-1.15a1 1 0 0 0 .5-.865v-2.298a1 1 0 0 0-.5-.866z"></svg:path><svg:path fill="url(#fluentColorDiversity201)" d="M6 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path><svg:path fill="url(#fluentColorDiversity202)" d="M12.5 3A1.5 1.5 0 0 0 11 4.5v3A1.5 1.5 0 0 0 12.5 9h3A1.5 1.5 0 0 0 17 7.5v-3A1.5 1.5 0 0 0 15.5 3z"></svg:path><svg:path fill="url(#fluentColorDiversity203)" d="M4.913 3.674a1.214 1.214 0 0 1 2.174 0l1.78 3.537C9.277 8.03 8.688 9 7.778 9H4.22c-.91 0-1.5-.97-1.087-1.79z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDiversity200" x1="7.517" x2="15.624" y1="7.949" y2="16.339" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity201" x1="3" x2="9" y1="11" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity202" x1="8.5" x2="15.875" y1="0" y2="9.563" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity203" x1="3.214" x2="7.355" y1="4.125" y2="8.427" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F24A9D"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDiversity20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
