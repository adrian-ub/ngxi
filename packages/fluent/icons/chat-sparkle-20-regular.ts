import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatSparkle20RegularIcon],svg[fluent-chat-sparkle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.878.282l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867a2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM17.502 12a1.33 1.33 0 0 1-.73-.22a7.003 7.003 0 0 1-10.195 4.328l-.087-.039l-.091-.021a.5.5 0 0 0-.188.01l-3.024.754l.756-3.02l.014-.095a.5.5 0 0 0-.063-.272A7 7 0 0 1 10.088 3a1.42 1.42 0 0 1 .863-.847l.216-.07A8 8 0 0 0 2 10l.007.346l.026.382a8 8 0 0 0 .829 2.887l.063.12l-.91 3.644l-.014.083v.082a.5.5 0 0 0 .62.441l3.645-.91l.12.064a8.003 8.003 0 0 0 11.366-5.157a2 2 0 0 1-.25.018"></svg:path>`,
})
export class FluentChatSparkle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
