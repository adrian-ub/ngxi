import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiVideoCameraIcon],svg[arcticons-emoji-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.763 37.295H14.245v-15.76h13.518a2.18 2.18 0 0 1 2.18 2.18v11.399a2.18 2.18 0 0 1-2.18 2.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.134 28.154v12.03H33.79V16.409h-8.724v-2.003H8.3m25.49 9.233l4.535-.004v13.79l-4.535.004m.298-25.157l4.781 5.491l3.63-.593l-6.007-9.354zm4.771 5.491l-4.777 3.772M28.92 16.19l5.168-3.927"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.283 30.998a3.634 3.634 0 1 0 7.266.003v-.003a3.634 3.634 0 1 0-7.266-.004zM5.5 14.405h2.634v13.75H5.5z"></svg:path>`,
})
export class ArcticonsEmojiVideoCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
