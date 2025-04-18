import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastJapaneseAcceptableButtonIcon],svg[fluent-emoji-high-contrast-japanese-acceptable-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.239 16.839v-2.121c0-1.215.026-1.81.037-2.057l.005-.127c0-.147-.021-.168-.168-.168l-.147.005c-.26.011-.857.037-2.121.037h-2.793c-1.246 0-1.852-.026-2.118-.037l-.15-.005c-.147 0-.168.02-.168.168l.004.114c.01.253.038.928.038 2.532v2.058c0 2.72-.03 3.534-.039 3.801l-.003.105c0 .147.021.168.168.168h.966c.147 0 .168-.021.168-.168v-1.617h5.061v1.029c0 .147.021.168.189.168h.945c.147 0 .168-.021.168-.168l-.003-.106c-.01-.262-.039-1.043-.039-3.611m-1.26-3.255v4.767h-5.061v-4.767z"></svg:path><svg:path d="M25.114 9.069v-.987c0-.147-.021-.168-.168-.168l-.124.004c-.279.01-1.023.038-2.627.038H9.847c-1.604 0-2.348-.028-2.627-.038l-.124-.004c-.147 0-.168.02-.168.168v.987c0 .147.021.168.168.168l.124-.004c.279-.01 1.023-.038 2.627-.038h11.361V22.95c0 .693-.294.819-1.155.819a31 31 0 0 1-2.52-.105c.189.273.315.588.42.966c.053.212.08.317.146.37c.066.05.171.05.379.05c1.89.042 3.045-.021 3.549-.4c.42-.293.588-.734.588-1.595c0-.268-.006-.564-.013-.94a142 142 0 0 1-.029-2.966V9.195a184 184 0 0 1 2.373.042c.147 0 .168-.021.168-.168"></svg:path><svg:path d="M1 16C1 7.716 7.716 1 16 1s15 6.716 15 15s-6.716 15-15 15S1 24.284 1 16M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13S23.18 3 16 3"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastJapaneseAcceptableButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
