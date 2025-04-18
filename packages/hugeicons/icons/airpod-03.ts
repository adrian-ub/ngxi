import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirpod03Icon],svg[hugeicons-airpod-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.33 10.846a4.5 4.5 0 0 1-2.663.266C3.07 10.777 2 9.717 2 8.056V6.129C2 4.122 3.526 2.98 5.556 3C7.81 3.023 10.5 4.764 10.5 7.507v11.91c0 .544 0 .816-.103 1.025c-.29.588-.911.558-1.48.558c-.57 0-1.19.03-1.48-.558c-.104-.209-.104-.481-.104-1.025v-8.312q0-.133-.003-.259m0 0l.003-.001m-.003.001C7.297 9.682 7 8.5 6 8.5m10.67 2.346a4.5 4.5 0 0 0 2.663.266C20.93 10.777 22 9.717 22 8.056V6.129C22 4.124 20.387 2.98 18.444 3C16.19 3.023 13.5 4.764 13.5 7.507v11.91c0 .544 0 .816.103 1.025c.29.588.911.558 1.48.558c.57 0 1.19.03 1.48-.558c.104-.209.104-.481.104-1.025v-8.312q0-.133.003-.259m0 0l-.003-.001m.003.001C16.703 9.682 17 8.5 18 8.5" color="currentColor"></svg:path>`,
})
export class HugeiconsAirpod03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
