import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiEmptynotepadIcon],svg[fxemoji-emptynotepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB636" d="M488.326 452.829H229.07c-3.352 0-6.068-3.941-6.068-8.802V67.973c0-4.861 2.717-8.802 6.068-8.802h259.369c3.29 0 5.957 3.868 5.957 8.64v376.215c-.001 4.862-2.718 8.803-6.07 8.803"></svg:path><svg:path fill="#FFD469" d="M408.821 452.829H184.018L15.164 281.973v-214a8.8 8.8 0 0 1 8.802-8.802h384.855z"></svg:path><svg:path fill="#FFB636" d="M184.018 452.829L15.164 283.975h132.963c19.822 0 35.891 16.069 35.891 35.891z"></svg:path>`,
})
export class FxemojiEmptynotepadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
