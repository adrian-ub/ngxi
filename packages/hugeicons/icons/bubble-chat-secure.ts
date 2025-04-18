import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatSecureIcon],svg[hugeicons-bubble-chat-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.505 2C6.212 2.25 2 6.435 2 11.56c0 2.54 1.034 4.848 2.72 6.56c.372.378.62.893.52 1.423a5.3 5.3 0 0 1-1.088 2.35a6.5 6.5 0 0 0 4.226-.657c.455-.242.682-.363.842-.387s.39.019.85.105q.959.18 1.935.179c5.373 0 9.758-4.054 9.995-9.139"></svg:path><svg:path d="M18 2c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.208-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C20.088 2.808 19.266 2 18 2m-6.004 10h.008M8 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatSecureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
