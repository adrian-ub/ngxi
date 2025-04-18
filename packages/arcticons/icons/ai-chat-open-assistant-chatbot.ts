import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAiChatOpenAssistantChatbotIcon],svg[arcticons-ai-chat-open-assistant-chatbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.636" ry="20.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.818 15.655c9.805 5.66 15.597 13.986 12.936 18.595s-12.767 3.756-22.572-1.905S3.586 18.36 6.247 13.75c1.064-1.843 3.318-2.812 6.267-2.95c4.427-.208 10.42 1.457 16.304 4.855"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.818 32.345c-9.805 5.661-19.91 6.514-22.571 1.905s3.13-12.934 12.935-18.595c5.662-3.27 11.424-4.935 15.795-4.871c3.198.046 5.652 1.018 6.777 2.966c2.66 4.609-3.13 12.934-12.936 18.595M20.43 21.251h7.14M19.314 24h9.372m-6.745 2.749h4.118"></svg:path>`,
})
export class ArcticonsAiChatOpenAssistantChatbotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
