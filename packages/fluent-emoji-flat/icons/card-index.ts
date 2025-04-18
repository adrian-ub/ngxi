import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCardIndexIcon],svg[fluent-emoji-flat-card-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CDC4D6" d="M8.454 15h15.092C24.922 15 26 13.858 26 12.509V3.49C26 2.142 24.922 1 23.546 1H8.454C7.078 1 6 2.142 6 3.491v9.018C6 13.858 7.078 15 8.454 15"></svg:path><svg:path fill="#635994" d="M28.32 10.98H3.68c-.93 0-1.68.75-1.68 1.67v4.15c0 .93.75 1.68 1.68 1.68H4v8.38c0 1.72 1.4 3.12 3.12 3.12h17.76c1.72 0 3.12-1.4 3.12-3.12v-8.38h.32c.93 0 1.68-.75 1.68-1.68v-4.15c0-.92-.75-1.67-1.68-1.67"></svg:path><svg:path fill="#F3EEF8" d="M8.454 14h15.092c.8 0 1.454-.67 1.454-1.491V3.49C25 2.671 24.346 2 23.546 2H8.454C7.654 2 7 2.67 7 3.491v9.018C7 13.329 7.654 14 8.454 14m0 13h15.092c.8 0 1.454-.66 1.454-1.491V16.49c0-.82-.654-1.491-1.454-1.491H8.454C7.654 15 7 15.67 7 16.491v9.018C7 26.329 7.654 27 8.454 27"></svg:path><svg:path fill="#321B41" d="M11 12.72a.5.5 0 1 0-1 0v4.03a.5.5 0 0 0 1 0zm11 0a.5.5 0 1 0-1 0v4.03a.5.5 0 0 0 1 0z"></svg:path><svg:path fill="#00A6ED" d="M14.254 11H9.746A.74.74 0 0 1 9 10.262V4.738A.74.74 0 0 1 9.746 4h4.508a.74.74 0 0 1 .746.738v5.524a.753.753 0 0 1-.746.738"></svg:path><svg:path fill="#998EA4" d="M17.56 4a.5.5 0 1 0 0 1h4.84a.5.5 0 0 0 0-1zm0 4a.5.5 0 1 0 0 1h4.84a.5.5 0 0 0 0-1zm-.5-1.5a.5.5 0 0 1 .5-.5h4.84a.5.5 0 0 1 0 1h-4.84a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 1 0 0 1h4.84a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCardIndexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
