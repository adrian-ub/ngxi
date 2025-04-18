import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase03Icon],svg[hugeicons-briefcase-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 12.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034h1.334c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592V13a2 2 0 1 1-4 0z"></svg:path><svg:path d="M13.802 13c.311-.09.665-.2 1.078-.327l4.171-1.286c1.485-.458 2.211-1.256 2.37-2.637c.07-.618.105-.927.056-1.18c-.142-.721-.748-1.306-1.556-1.502C19.638 6 19.283 6 18.572 6H5.428c-.711 0-1.066 0-1.35.068c-.807.196-1.413.78-1.555 1.502c-.05.253-.014.562.057 1.18c.158 1.381.884 2.179 2.369 2.637l4.171 1.286a72 72 0 0 0 1.078.327"></svg:path><svg:path d="m3.463 11l-.196 2.172c-.352 3.894-.528 5.841.6 7.085S6.94 21.5 10.824 21.5h2.352c3.885 0 5.828 0 6.957-1.243s.952-3.19.6-7.085L20.537 11M15.5 5.5l-.077-.265c-.385-1.32-.578-1.98-1.036-2.357S13.32 2.5 12.102 2.5h-.204c-1.218 0-1.827 0-2.285.378c-.458.377-.65 1.037-1.036 2.357L8.5 5.5"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
