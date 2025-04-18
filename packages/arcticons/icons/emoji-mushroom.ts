import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiMushroomIcon],svg[arcticons-emoji-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiMushroom0" fill="none" stroke="currentColor" d="M42.5 24.296c0 6.541-8.283 6.662-18.5 6.662s-18.5-.12-18.5-6.662S13.783 7.271 24 7.271s18.5 10.484 18.5 17.025"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.435 30.867v8.835s-.087 1.005 1.87 1.005h8.709s1.668.294 1.668-1.273v-8.536"></svg:path><svg:use href="#arcticonsEmojiMushroom0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiMushroom0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.192 10.549s3.472 10.453-8.085 10.372c0 0 2.224-6.71 8.085-10.372m19.546 0s-3.472 10.453 8.084 10.372c0 0-2.223-6.71-8.084-10.372M18.065 21.476c-.002 2.525 2.654 4.573 5.932 4.574s5.937-2.045 5.938-4.57v-.004c0-2.525-2.657-4.572-5.935-4.572s-5.935 2.047-5.935 4.572"></svg:path>`,
})
export class ArcticonsEmojiMushroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
