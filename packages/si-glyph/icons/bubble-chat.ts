import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleChatIcon],svg[si-glyph-bubble-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m2.701 14.927l1.051-3.998H2.299C1.059 10.929 0 9.944 0 8.672V2.303C0 1.033 1.011 0 2.252 0h11.496C14.989 0 16 1.033 16 2.303v6.369c0 1.271-.963 2.257-2.203 2.257H7.983zM.959 2.513v6.052c0 .88.703 1.452 1.566 1.452h2.297l-.77 2.869l3.482-2.87h5.98c.865 0 1.568-.571 1.568-1.451V2.513c0-.879-.703-1.595-1.568-1.595H2.525c-.863 0-1.566.716-1.566 1.595"></svg:path><svg:path d="M12.625 8.946H3.344c-.996 0-1.295-.419-1.295-1.384V3.468c0-.963.361-1.426 1.357-1.426h9.219c.998 0 1.314.557 1.314 1.519v3.97c-.001.965-.316 1.415-1.314 1.415"></svg:path></svg:g>`,
})
export class SiGlyphBubbleChatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
