import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiLevelsliderIcon],svg[fxemoji-levelslider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BAC5C6" d="M402.879 488.793c0 11.182-9.065 20.247-20.247 20.247H126.247c-11.182 0-20.247-9.065-20.247-20.247V20.247C106 9.065 115.065 0 126.247 0h256.385c11.182 0 20.247 9.065 20.247 20.247z"></svg:path><svg:path fill="#989FA0" d="M275.342 440.869c0 6.157-4.991 11.147-11.147 11.147H244.73c-6.157 0-11.147-4.991-11.147-11.147V68.171c0-6.157 4.991-11.147 11.147-11.147h19.465c6.157 0 11.147 4.991 11.147 11.147z"></svg:path><svg:path fill="#DBDBDB" d="M200.613 259.221a8.577 8.577 0 0 1-8.577-8.577v-43.85a8.577 8.577 0 0 1 8.577-8.577h107.699a8.577 8.577 0 0 1 8.577 8.577v43.85a8.577 8.577 0 0 1-8.577 8.577h-32.967l-.003 5.453h-41.76l.002-5.453z"></svg:path><svg:path fill="#464A4C" d="M200.613 238.935a8.577 8.577 0 0 1-8.577-8.577v-43.85a8.577 8.577 0 0 1 8.577-8.577h107.699a8.577 8.577 0 0 1 8.577 8.577v43.85a8.577 8.577 0 0 1-8.577 8.577z"></svg:path>`,
})
export class FxemojiLevelsliderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
