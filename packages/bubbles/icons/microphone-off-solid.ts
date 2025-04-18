import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMicrophoneOffSolidIcon],svg[bubbles-microphone-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13.333a5.005 5.005 0 0 1-5-5V6.667a.667.667 0 0 0-1.333 0v1.666a6.34 6.34 0 0 0 5.521 6.282a.166.166 0 0 1 .145.165v.553a.667.667 0 1 0 1.334 0v-.553a.166.166 0 0 1 .145-.165a6.3 6.3 0 0 0 2.573-.934a.17.17 0 0 0 .076-.122a.17.17 0 0 0-.048-.136l-.727-.728a.17.17 0 0 0-.2-.026A4.97 4.97 0 0 1 8 13.333"></svg:path><svg:path d="M4.285 6.298A.167.167 0 0 0 4 6.415v1.918a4 4 0 0 0 5.647 3.645a.17.17 0 0 0 .094-.12a.17.17 0 0 0-.044-.147zm11.52 8.569l-2.635-2.634a.165.165 0 0 1-.017-.215a6.3 6.3 0 0 0 1.18-3.684V6.667a.667.667 0 1 0-1.333 0v1.667a4.97 4.97 0 0 1-.771 2.667a.166.166 0 0 1-.256.028l-.486-.484a.17.17 0 0 1-.026-.2c.355-.61.541-1.305.54-2.011V4.001a4 4 0 0 0-7.838-1.128a.167.167 0 0 1-.278.071L1.138.201a.675.675 0 0 0-.943 0a.667.667 0 0 0 0 .942L14.862 15.81l.005.005a.667.667 0 0 0 .933-.95z"></svg:path></svg:g>`,
})
export class BubblesMicrophoneOffSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
